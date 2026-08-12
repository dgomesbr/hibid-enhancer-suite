# Current bids and watch list

Turning your own bid list into a raise / hold / let-go decision, without ever
touching a credential.

`/account/currentbids` reuses the catalog's tile markup, so the final price, the
deal dot and the declutter all apply. Two things there are different, and both
matter.

**It lists several auctions at once**, grouped under auction headers. Fees differ
per auction, so reading one auction id from the URL — what the catalog does —
would price half the page with the wrong premium. Each tile is mapped to the
header above it and fees are fetched once per distinct auction.

**Each tile carries a bid status**, and combined with the ceiling that turns a
flat list into a decision:

| Your status | Next bid vs your ceiling | Verdict |
|---|---|---|
| Outbid | under | 🟢 **worth raising** |
| Outbid | over | 🔴 **let it go** — names the ceiling you would blow past |
| Winning | final cost under retail | 🟢 **hold, do not raise** |
| Winning | final cost over retail | 🔴 **winning above retail** |
| any | no retail price found | ⚪ status only, no claim |

HiBid already tells you that you are losing. It does not tell you whether losing
is the right outcome, which is the only question the page exists to answer.

Lots in the let it go case — outbid *and* past your ceiling — are faded to 50%
so they stop competing for attention with the ones you can still act on. Hover
restores them; nothing is hidden, because the bid history is yours. Measured on a
real page: 10 of 100 tiles faded.

"Winning above retail" deliberately stays at full opacity. That one wants your
attention, because you are on course to overpay.

## No credentials are touched

Your own maximum bid would be useful here and is **deliberately not used**. It
exists only in the authenticated `CurrentBidsSearch` response, and reading it
would mean getting hold of a bearer token. Everything above works from the
rendered status plus public lot and auction data. Tests assert that the script
never reads `document.cookie`, never sets an `Authorization` header, and contains
no JWT pattern.

## Why a cold bids page is slow, and what was done about it

Measured end to end on a real 100-lot page: **124 s**. Unlike a catalog, where
many lots repeat the same product, a bids page is ~100 *distinct* products — so
it is ~200 retailer requests however they are arranged. That total cannot be
argued away.

What could be fixed is *which* answers arrive first. The sweep is ordered
**outbid first**, then unknown, then winning: a lot you are being outbid on may
need action within minutes, one you are comfortably winning does not. The
decisions you might act on resolve in the first seconds instead of after two
minutes. Cached lots skip the politeness delay entirely, as on the catalog.
