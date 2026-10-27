# talks

The talks moved to <https://baggiponte.com/talks/>, decks included, and their source and history now live in
[baggiponte/blog](https://github.com/baggiponte/blog). This repository is archived.

What is left here is the `talks` Worker on `talks.baggiponte.com`: `src/index.ts` answers every request with a 301 to
the same path and query under `https://baggiponte.com/talks`, so old links and QR codes keep landing on the right slide.
Cloudflare Workers Builds deployed it from `main`; to redeploy by hand, `pnpm install --frozen-lockfile` and
`pnpm deploy`.
