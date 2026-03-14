# Skill Provenance Metadata

This repository vendors the following skills from the local Codex system skill directory.

## Source

- Source root: `/opt/codex/skills/.system`
- Copy method: direct filesystem copy

## Imported skills

### `skill-creator`

- Source path: `/opt/codex/skills/.system/skill-creator`
- Destination path: `skills/skill-creator`
- Included files:
  - `SKILL.md`
  - `scripts/init_skill.py`
  - `scripts/package_skill.py`
  - `scripts/quick_validate.py`
  - `license.txt`
- License/copyright info:
  - Contains Apache License 2.0 text in `skills/skill-creator/license.txt`.
  - No explicit copyright owner notice is embedded in the copied files.

### `skill-installer`

- Source path: `/opt/codex/skills/.system/skill-installer`
- Destination path: `skills/skill-installer`
- Included files:
  - `SKILL.md`
  - `scripts/github_utils.py`
  - `scripts/install-skill-from-github.py`
  - `scripts/list-curated-skills.py`
  - `LICENSE.txt`
- License/copyright info:
  - Contains Apache License 2.0 text in `skills/skill-installer/LICENSE.txt`.
  - No explicit copyright owner notice is embedded in the copied files.
