---
name: skill-crud
description: Use when you need a repeatable workflow to create, review, improve, or retire Codex skills in a repository.
---

# Skill CRUD

## Overview
Use this skill to perform full lifecycle management for agent skills: create new skills, inspect and explain existing skills, update skill quality and resources, and safely delete deprecated skills.

## Quick Workflow Decision
1. **Classify request** as Create, Read, Update, or Delete.
2. **Locate scope constraints** (`AGENTS.md`, repo conventions, user constraints).
3. **Execute task workflow** below.
4. **Validate** with linting/packaging checks when possible.
5. **Report changes clearly** (summary, tests, risks, follow-ups).

## Create (C)
When asked to make a new skill:

1. **Choose a precise skill name** (kebab-case, action/domain oriented).
2. **Initialize skeleton** (preferred):
   - `python /opt/codex/skills/.system/skill-creator/scripts/init_skill.py <skill-name> --path <target-skills-dir>`
3. **Write frontmatter carefully**:
   - `name`: exact skill folder identity.
   - `description`: what it does + explicit trigger situations.
4. **Author workflow-focused body**:
   - Keep concise and imperative.
   - Include decision points, ordered steps, and concrete examples.
   - Avoid generic LLM advice unless it is task-specific.
5. **Add only necessary resources**:
   - `scripts/` for deterministic automation.
   - `references/` for docs loaded on demand.
   - `assets/` for templates/artifacts used in outputs.
6. **Validate** before finalizing:
   - `python /opt/codex/skills/.system/skill-creator/scripts/quick_validate.py <path/to/skill>`

## Read (R)
When asked to review or explain an existing skill:

1. **Open `SKILL.md` first** and extract:
   - Trigger intent (frontmatter description).
   - Promised workflow/capabilities.
   - Dependencies on bundled resources.
2. **Inspect only needed supporting files** (`scripts/`, `references/`, `assets/`).
3. **Assess quality** using this checklist:
   - Description is specific and triggerable.
   - Instructions are actionable and ordered.
   - No stale references to missing files.
   - Resource files are discoverable and purposeful.
4. **Summarize findings** with gaps, risks, and recommended edits.

## Update (U)
When improving or extending a skill:

1. **Preserve external contract** unless user asks to change it:
   - Keep `name` stable.
   - Evolve `description` only to improve trigger precision.
2. **Refactor for signal density**:
   - Remove repetition and placeholder text.
   - Move bulky detail into `references/` files.
3. **Synchronize resources**:
   - Add/update scripts and references together with SKILL.md pointers.
   - Remove dead files and dead links.
4. **Regression-check behavior**:
   - Run representative script commands if scripts changed.
   - Re-run validator after edits.
5. **Document delta**:
   - What changed.
   - Why it changed.
   - Any migration impact for users/agents.

## Delete (D)
When retiring a skill:

1. **Confirm deletion target** (exact folder and reason).
2. **Check references** to the skill in repo docs or automation.
3. **Remove skill directory** and any obsolete references.
4. **Call out breaking impact** in final summary.
5. **Do not delete shared resources** used by other skills.

## Quality Bar
Before final output, verify:

- Frontmatter YAML is valid with `name` and `description`.
- Description includes both capability and concrete trigger cases.
- Body is procedural, concise, and free of TODO placeholders.
- File tree is minimal and intentional.
- Validation command has been run (or limitation is explicitly reported).

## Response Template
Use this structure when reporting work:

1. **Operation**: Create / Read / Update / Delete.
2. **Scope**: paths touched.
3. **Result**: what was added/changed/removed.
4. **Validation**: commands + outcomes.
5. **Follow-ups**: optional improvements.
