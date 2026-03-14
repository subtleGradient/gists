---
name: create-skill
description: Create or update Codex-compatible skills in a repository, including SKILL.md frontmatter, clear trigger-focused descriptions, lightweight workflow instructions, and optional scripts/references/assets. Use when a user asks to build a new skill, refine an existing skill, or package a skill for reuse.
---

# Create Skill

## Overview

Design skills that are compact, reusable, and easy for another agent to execute without extra explanation.
Favor minimal core instructions in `SKILL.md`, and move detailed reference material into `references/` only when needed.

## Workflow

1. **Define the job and triggers**
   - Extract what the skill must do from the request.
   - Identify phrases or contexts that should trigger the skill.
   - If scope is ambiguous, infer a practical default and proceed.

2. **Select a skill structure**
   - Use **workflow-based** structure for sequential procedures.
   - Use **task-based** structure for independent operations.
   - Use **guideline/reference** structure for standards-heavy work.
   - Combine structures only when it improves clarity.

3. **Draft frontmatter first**
   - Set `name` to the folder name (lowercase, hyphenated).
   - Set a one-line `description` that includes:
     - what the skill does
     - when to use it (explicit trigger scenarios)
   - Keep YAML valid and include only `name` and `description`.

4. **Write actionable body instructions**
   - Use imperative instructions ("Do X", "Run Y", "Check Z").
   - Provide a short decision flow for common branches.
   - Include concrete examples of user requests when useful.
   - Keep `SKILL.md` lean; avoid tutorial-style filler.

5. **Add resources only when they reduce repeated work**
   - `scripts/` for repeatable deterministic steps.
   - `references/` for detailed domain docs loaded on demand.
   - `assets/` for templates/boilerplate copied into outputs.
   - Do not add extra docs such as README, changelog, or quickstart files.

6. **Validate and package**
   - Ensure frontmatter is valid and description is trigger-rich.
   - Verify references mentioned in `SKILL.md` exist.
   - Package the skill into a `.skill` artifact when requested.

## Quality Checklist

Before finalizing, confirm all items:

- Skill folder name matches frontmatter `name`.
- Description clearly states both capabilities and trigger contexts.
- Instructions are concise and executable.
- No unnecessary files were added.
- Any scripts included are runnable.
- Packaging/validation command passes.

## Fast Template

Use this skeleton when creating a new skill quickly:

```markdown
---
name: <skill-name>
description: <what it does + when to use it>
---

# <Skill Title>

## Overview
<1-2 sentence purpose>

## Workflow
1. <step>
2. <step>
3. <step>

## Resources
- scripts/: <if needed>
- references/: <if needed>
- assets/: <if needed>
```
