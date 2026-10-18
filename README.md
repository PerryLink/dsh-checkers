# @perrylink/dsh-checkers

One-command installer for the **53-checker PerryLink compliance suite**.

```sh
dsh plugin --profile web add @perrylink/dsh-checkers
```

It installs every checker and inserts all 53 Cordis rows through one bundle layer.
Each checker keeps its own npm name, rule pack, README, and version; this package
is only the suite entry point.

**Scope:** China-domain document checks (trade, customs, bids, HSE, medical,
legal, government, manufacturing). Every checker reports differences and never
makes a legal/medical/customs determination. See `checkers.json` for the exact
list and versions.

**Uninstall:** `dsh plugin --profile web remove @perrylink/dsh-checkers` removes
the suite row; remove individual checker packages separately if you installed
them directly.

Apache-2.0. Regenerate with `node build.mjs` after checker versions change.
