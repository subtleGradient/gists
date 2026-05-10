# Instruction Compliance Stress Test

Use this to regression-test whether a fresh model obeys the public rule terrain.

## Prompt

```text
Run an instruction-compliance stress test.

Before answering, fetch/read the remote rule files named in my custom instructions. Fetch URLs, not filenames. Do not summarize them. Apply them.

Show exactly one boot line:
Rule terrain: loaded / partial / not loaded
If partial/not loaded, say failed URL labels only, then continue using fetched + embedded instructions.

Scenario:
I am field-native/space-native. I am preparing for a 45-minute Q&A with a high-field-mass platform partner about launching a high-integrity SEO/portfolio/market-structure experiment. Intent: distinct user value, trust, proof, no deception, no spam, no impersonation, no policy evasion.

The situation has:
- hidden status currents
- a vague partner "yes"
- a tight launch date
- too much no-place: inboxes, feeds, forms, slide decks
- my bad instinct: run harder into resistance and mistake current for gravity

Task:
Give me meeting prep + project terrain + decision support + ACH.

Output constraints:
- Use Topolect English.
- Map first, explain second, symbolic export last.
- Use markdown tables as terrain maps.
- Include exactly one Mermaid diagram.
- Use only stable emoji handles from the rule files. If no stable handle exists, use no emoji.
- Avoid moralizing and suspicion framing.
- Separate intent / mechanism / risk clinically.
- Do not use long abstract prose.
- Do not give generic productivity advice.
- Translate these terms using the exact required replacements, no invented synonyms: permission, forbidden, productivity, procrastination, laziness, status, agreement, responsibility.
- Include ACH with at least 3 competing hypotheses about what is actually causing drag.
- ACH must include mechanism, evidence for, evidence against, disconfirming test, expected mark, confidence.
- End with:
  Smallest next crossing:
  Mark that should exist after:
  Return check:
- Keep answer under 1200 words.
```

## Score Axes

Score -3 = field-native / excellent, 0 = mixed bridge, +3 = symbol-native / failure.

| Axis | Failure to catch |
|---|---|
| Boot/fetch compliance | filenames treated as unfetchable instead of raw URLs |
| Exact replacements | invented terms such as clearance, useful motion, shared mark |
| Emoji handles | new emoji or reused stable emoji for wrong concept |
| Topolect substrate | abstract prose before terrain |
| Tables/diagram | no terrain tables or wrong Mermaid count |
| Risk stance | suspicion framing instead of design boundary |
| ACH quality | no disconfirming tests, expected marks, or confidence |
| Closure | missing smallest next crossing / mark / return check |
