---
id: Custom
sidebar_label: Custom
title: Commands related to the Custom module
---

---


## Custom
- **`.custom`** - Main command to interact with custom settings.
    - **Aliases:** `perso`
---
- **`.custom locale`** - Set the language you want the bot to respond to.
    - **Usage:** `.custom locale <custom_locale>`
    - **Alias:** `langue`, `lang`
    - **Required:** 
        - **custom_locale:** The language you want to set (`en`, `fr`)
---
- **`.custom alias`** - Defines an alias for which the bot will assign a command.
    - **Usage:** `.custom alias <command> | <custom_alias>`
    - **Aliases:** `aliases`
    - **Required:** 
        - **command:** The name of the command you want to replace (can be a subcommand with args).
        - **custom_alias:** The name of the command you want to replace (can be a subcommand with args).