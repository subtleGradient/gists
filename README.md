# gists

Public rule terrain for custom-instruction bootstrapping.

Raw root: `https://raw.githubusercontent.com/subtleGradient/gists/main/`

Primary index+combined rule URL: `https://raw.githubusercontent.com/subtleGradient/gists/main/AGENTS.md`

## Files

| File | Purpose |
|---|---|
| `AGENTS.md` | generated single-file index plus combined active rule terrain |
| `.rulesync/rules/rule-terrain.md` | source of truth for generated `AGENTS.md` |
| `rulesync.jsonc` | focused Rulesync config for `AGENTS.md` generation |
| `instructions2.txt` | pasteable compact bootloader for on-platform custom instructions |
| `instructions.txt` | fuller fallback operating contract |
| `Topolect-English.RULE.txt` | field-native / space-native vocabulary and translation rules |
| `Topolect-English-LLM-Output.RULE.md` | output forms, Mermaid, emoji enforcement, hidden assumptions |
| `LLM-Output-Shape.RULE.md` | compact answer/table shapes |
| `Strategy-Trust-Contract.RULE.md` | risk and trust stance for strategy work |
| `Peer-Strategy.RULE.md` | peer-level strategic reasoning route |
| `ACH.RULE.md` | Analysis of Competing Hypotheses discipline |
| `skills/human-runtime-primer/SKILL.md` | human modeling via BCM/OPS, need states, vectors, channels |
| `Instruction-Compliance-Stress-Test.md` | regression prompt and score axes |

## Boot Rule

Custom instructions should fetch only the raw `AGENTS.md` URL. `AGENTS.md` links to the source terrain and contains the combined rules, so one successful fetch is enough.
