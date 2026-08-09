# Content source-of-truth

This file exists so anyone editing the site's 8 HTML pages can check a fact once,
in one place, instead of re-reading every page. It is a reference document only —
the site itself is plain static HTML, not rendered from this file.

**Rule for every page:** never invent a fact, date, quote, statistic, or contact
detail. If something isn't verified, it gets a labeled "in development" /
"coming soon" placeholder — see `/parliament/`, `/kayunga/`, `/news/`,
`/speeches/`, `/contact/` for the pattern.

## Verified facts (used across multiple pages — keep these consistent)

- Born: Busaana Sub-county, Kayunga District.
- Education: BA Education (Makerere University); MA Human Resource Management
  (Makerere University Business School).
- Party: National Unity Platform (current, per facts panel).
- Constituency: Kayunga District. Assumed office: 15 January 2026.
- Roles: Deputy Chief Opposition Whip; Shadow Minister for the Presidency;
  12th Parliament. Appointed May 2026.
- Founder of the Forum for Emancipation to Empowerment Drive (FEED).
- Married to Robert Nangatsa; three children.
- Pull-quote: "My political struggles revolve around issues of respect for the
  rule of law, democracy, respect of people's rights without discrimination."
  — Daily Monitor, August 2024.

## Timeline (used on home, full version on /about)

| Date | Event |
|---|---|
| 2006 | First contested Kayunga Woman MP seat, FDC ticket. Unsuccessful. |
| 2011 | Contested again. Unsuccessful. |
| 2016–2021 | District Woman Councillor (Kayunga Town Council & Sub-county); Secretary for Education, District Executive Committee. |
| (undated) | ~10 years as Kayunga District FDC Chairperson; ~5 years as FDC national Deputy Secretary for Education. Exact date ranges not documented — do not invent specific years. |
| 2021 | Contested Woman MP again (lost) + late-2021 LC V Chairperson by-election (lost). Assaulted during by-election campaign; pursued through courts. |
| **gap** | **Not documented:** date of her transition from FDC to NUP. Facts panel confirms NUP as current party; bio only documents FDC through 2021. Do not bridge this with invented narrative — the /about timeline shows it as an explicit gap. |
| 2022 | Interview describing campaign to take pregnant girls back to school in Kayunga. |
| 2023 | Organized/joined protest over unfulfilled presidential pledge to tarmac a district road ("No tarmac road, no votes"). |
| Aug 2024 | Daily Monitor quote (see above). |
| Jan 2026 | Won Kayunga Woman MP seat (20 years after first attempt). Petition against her win filed and dismissed by Kayunga Chief Magistrate's Court same month. |
| May 2026 | Appointed Deputy Chief Opposition Whip & Shadow Minister for the Presidency. |

## Priorities (verbatim across /, /priorities)

1. **Rule of law & equal rights** — public position since 2006.
2. **Girls' education** — 2022 interview, campaign to return pregnant girls to school.
3. **Roads & infrastructure** — 2023 tarmac-road protest.
4. **Electoral integrity** — 2021 campaign assault, pursued through courts.

## Photography inventory

| File | Shows | Used on |
|---|---|---|
| `/images/portrait-studio.jpg` | Studio portrait (highest-res available) | Home hero |
| `/images/parliament-committee-1.jpg` | Speaking at a mic in a committee/meeting room | Home (Parliament teaser), /parliament |
| `/images/parliament-committee-2.jpg` | Seated, speaking, in a meeting room | Home (Her Story teaser), /parliament |
| `/images/parliament-group-officials.jpg` | Group photo with other officials, government-building steps | Home (full-bleed break), /parliament |

**Not verified — do not caption as fact:** the specific event, date, or names of
colleagues in `parliament-group-officials.jpg`. Captions referencing it stay
generic ("with fellow Members of Parliament").

**Does not exist yet:** any real Kayunga landscape/market/community photography.
`/kayunga/` and the home Kayunga teaser use a labeled placeholder, not stock imagery.

## Explicitly NOT verified — do not invent under any circumstance

- Office email, phone number, or physical address (`/contact/` stays a styled
  placeholder until real details are supplied).
- Any specific parliamentary motion, question, speech, or committee vote.
- Any news article, headline, or press mention beyond the one Daily Monitor
  quote above.
- The exact FDC → NUP party-transition date.

## Maintenance note (no-build-step site)

Nav and footer markup is duplicated identically across all 8 `index.html`
files (there's no templating layer, by design — see README.md). If nav links,
footer copy, or the site tagline change, update all 8 files:

`/index.html`, `/about/index.html`, `/kayunga/index.html`,
`/parliament/index.html`, `/priorities/index.html`, `/news/index.html`,
`/speeches/index.html`, `/contact/index.html`
