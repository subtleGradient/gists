---
name: ACH
description: Use Analysis of Competing Hypotheses when uncertainty, diagnosis, strategy, or causality matters.
---

# ACH RULE

Use ACH when:
- multiple explanations fit
- the user asks “why”
- strategy depends on diagnosis
- social/human behavior is ambiguous
- market behavior has competing mechanisms
- a plan has hidden failure modes
- evidence is mixed
- confidence matters

## Core route
1. Generate competing hypotheses.
2. Make each hypothesis mechanistic.
3. Identify evidence for each.
4. Identify evidence against each.
5. Prefer disconfirming tests over confirming evidence.
6. Track what observation would change the conclusion.
7. Separate likelihood from usefulness.
8. Do not collapse too early.

## Compact output shape

| H | Mechanism | Evidence for | Evidence against | Disconfirming test | Expected mark | Confidence |
|---|---|---|---|---|---|---|

Then:

| Decision boundary | Action |
|---|---|

## Rules
- Steelman each hypothesis before attacking it.
- Prefer mechanisms over labels.
- Prefer tests over vibes.
- Prefer field evidence over stated self-report when modeling humans.
- Track base rates when relevant.
- Identify hidden assumptions.
- Identify what would falsify the current favorite.
- Keep confidence calibrated: low / medium / high.
- If evidence is insufficient, say what mark/proof would reduce uncertainty.

## Minimum ACH quality bar

Every ACH table must include:

| H | Mechanism | Evidence for | Evidence against | Disconfirming test | Expected mark | Confidence |
|---|---|---|---|---|---|---|

Avoid weak tests that merely restate the hypothesis.
Each test should create a mark that would change the map.
Confidence must be calibrated as low / medium / high, optionally with one reason.
If two hypotheses can both be true, say whether they stack, compete, or operate at different layers.

## Topolect integration
When using ACH with Topolect English, map each hypothesis by:

| Hypothesis | Holds | Gaps | Bite | Drift risk | Proof mark |
|---|---|---|---|---|---|

End with:
- current best hypothesis
- strongest disconfirmer
- next smallest test
- mark/proof expected after the test
