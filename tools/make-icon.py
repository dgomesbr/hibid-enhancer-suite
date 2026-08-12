#!/usr/bin/env python3
"""
Render the HiBid Enhancer Suite "H+" icon to PNGs and emit the data URI used by
the userscript's @icon metadata.

    python tools/make-icon.py

Writes assets/icon-{16,24,32,48,64,128,256}.png, assets/icon-preview.png, and
assets/icon-datauri.txt.

The glyphs are geometry, not text: the icon is displayed at 16px in the
Tampermonkey dashboard, where font availability and hinting make <text>
unpredictable. Everything is supersampled 8x and downscaled with Lanczos so the
small sizes stay clean.

Kept in sync with assets/icon.svg by hand — the SVG is the human-readable
source, this is the renderer. Same coordinates in both.
"""

from __future__ import annotations

import base64
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"

# --- design tokens (viewBox is 128x128; must match assets/icon.svg) ----------
VIEWBOX = 128
CORNER = 28
GRAD_FROM = (0x38, 0xBD, 0xF8)   # #38bdf8  bottom-left
GRAD_TO = (0xA8, 0x55, 0xF7)     # #a855f7  top-right
GLYPH = (0xFF, 0xFF, 0xFF)
EDGE = (0x0F, 0x17, 0x2A)
EDGE_ALPHA = 36                  # ~0.14 opacity
GLYPH_R = 2.5

# (x, y, w, h) in viewBox units — H stems, H crossbar, plus bars.
BARS = [
    (22, 34, 14, 60),
    (56, 34, 14, 60),
    (22, 57, 48, 14),
    (81, 57, 26, 14),
    (87, 51, 14, 26),
]

SIZES = [16, 24, 32, 48, 64, 128, 256]
SS = 8  # supersample factor


def gradient(size: int) -> Image.Image:
    """45-degree gradient: bottom-left -> top-right, matching CSS 45deg."""
    img = Image.new("RGB", (size, size))
    px = img.load()
    denom = max(1, 2 * (size - 1))
    for y in range(size):
        for x in range(size):
            t = (x + (size - 1 - y)) / denom
            px[x, y] = (
                round(GRAD_FROM[0] + (GRAD_TO[0] - GRAD_FROM[0]) * t),
                round(GRAD_FROM[1] + (GRAD_TO[1] - GRAD_FROM[1]) * t),
                round(GRAD_FROM[2] + (GRAD_TO[2] - GRAD_FROM[2]) * t),
            )
    return img


def render(size: int) -> Image.Image:
    """Render one square icon at `size` px, transparent outside the tile."""
    big = size * SS
    scale = big / VIEWBOX

    base = gradient(big).convert("RGBA")

    # Rounded-tile alpha mask.
    mask = Image.new("L", (big, big), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, big - 1, big - 1), radius=CORNER * scale, fill=255
    )

    tile = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    tile.paste(base, (0, 0), mask)

    draw = ImageDraw.Draw(tile)

    # Hairline edge so the tile is defined on a white dashboard.
    inset = 0.75 * scale
    draw.rounded_rectangle(
        (inset, inset, big - 1 - inset, big - 1 - inset),
        radius=(CORNER - 0.5) * scale,
        outline=(*EDGE, EDGE_ALPHA),
        width=max(1, round(1.5 * scale)),
    )

    # Glyph bars.
    for (x, y, w, h) in BARS:
        draw.rounded_rectangle(
            (x * scale, y * scale, (x + w) * scale - 1, (y + h) * scale - 1),
            radius=GLYPH_R * scale,
            fill=(*GLYPH, 255),
        )

    return tile.resize((size, size), Image.LANCZOS)


def preview(images: dict[int, Image.Image]) -> Image.Image:
    """Contact sheet: the icon on light and dark, at every size."""
    pad, gap = 18, 14
    row = [s for s in SIZES if s <= 128]
    width = pad * 2 + sum(row) + gap * (len(row) - 1)
    tall = max(row)
    height = (pad * 2 + tall) * 2

    sheet = Image.new("RGB", (width, height), (0xFF, 0xFF, 0xFF))
    ImageDraw.Draw(sheet).rectangle(
        (0, height // 2, width, height), fill=(0x20, 0x23, 0x2A)
    )

    for band, top in ((0, pad), (1, height // 2 + pad)):
        x = pad
        for s in row:
            img = images[s]
            sheet.paste(img, (x, top + (tall - s)), img)
            x += s + gap
    return sheet


def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)

    images: dict[int, Image.Image] = {}
    for s in SIZES:
        img = render(s)
        images[s] = img
        out = ASSETS / f"icon-{s}.png"
        img.save(out, "PNG", optimize=True)
        print(f"  wrote {out.relative_to(ROOT)} ({out.stat().st_size} bytes)")

    sheet = preview(images)
    sheet.save(ASSETS / "icon-preview.png", "PNG", optimize=True)
    print(f"  wrote assets/icon-preview.png ({sheet.width}x{sheet.height})")

    # 64px is the sweet spot for @icon: crisp on the dashboard, small enough to
    # inline so the icon needs no network and works offline.
    raw = (ASSETS / "icon-64.png").read_bytes()
    uri = "data:image/png;base64," + base64.b64encode(raw).decode("ascii")
    (ASSETS / "icon-datauri.txt").write_text(uri + "\n", encoding="utf-8")
    print(f"  wrote assets/icon-datauri.txt ({len(uri)} chars)")
    print("\n@icon        " + uri)


if __name__ == "__main__":
    main()
