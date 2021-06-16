---
id: Mod
sidebar_label: Mod
title: Commands related to the Mod module
---

---
:::info Note
Some commands may need the following permissions:
- `Manage Roles`
- `Kick Members`
- `Ban Members`
- `Manage Messages`
:::  


## Lang
- **`.lang`** - Main command to interact with lang settings.
    - **Aliases:** `locale`, `langue`
    - **Permissions:** `Administrator`
---
- **`.lang set`** - Sets the language you want the bot to respond to on the guild.
    - **Usage:** `.lang set <locale>`
    - **Alias:** `define`, `choice`
    - **Required:** 
        - **locale:** The language you want to set (`en`, `fr`).
---
- **`.lang list`** - Shows all available languages.
    - **Usage:** `.lang list`
    - **Alias:** `liste`, `all`, `view`
    
---

## Rule
- **`.rule`** - Main command to interact guild rules.
    - **Usage:** `.rule <rule_id> [members]`
    - **Alias:** `rules`, `regle`, `regles`
    - **Required:** 
        - **rule_id:** The number of the rule you want to recall (integer).
    - **Optional:** 
        - **members:** The members you want to advertise (can be username, mention, user id or nickname).
---
- **`.rule list`** - Shows all rules for the guild.
    - **Usage:** `.rule list`
    - **Alias:** `show`, `all`
---
- **`.rule add`** - Adds a rule.
    - **Usage:** `.rule add <rule_id>`
    - **Permissions:** `Administrator` 
    - **Required:** 
        - **rule_id:** The rule you want to define (string).
---
- **`.rule edit`** - Edits a rule.
    - **Usage:** `.rule edit <rule_id> <rule>`
    - **Permissions:** `Administrator` 
    - **Required:** 
        - **rule_id:** The rule id you want to edit (int).
        - **rule:** The new content for this rule (string).
---
- **`.rule delete`** - Deletes a rule.
    - **Usage:** `.rule delete <rule_id> <rule>`
    - **Permissions:** `Administrator` 
    - **Required:** 
        - **rule_id:** The rule id you want to edit (int).
        - **rule:** The new content for this rule (string).
---
- **`.rule update`** - Updates the message rules.
    - **Usage:** `.rule update <message_id>`
    - **Permissions:** `Administrator` 
    - **Required:** 
        - **message_id:** The message you want to edit.
---
- **`.mute`** - Main command to interact mutes.
    - **Usage:** `.mute <member> [reason]`
    - **Permissions:** `Administrator` 
    - **Required:** 
        - **members:** The numbers you want to mute.
    - **Optional:** 
        - **reason:** The reason for this mute.
---
- **`.mute set`** - Defines the mute role.
    - **Usage:** `.mute set <role>`
    - **Alias:** `define`
    - **Required:** 
        - **role:** The role to use for mutes (can be role mention or role id).
    
---

## Autoban
- **`.autoban`** - Adds a specific username pattern to ban on join.
    - **Usage:** `.autoban <args>`
    - **Required:** 
        - **args:** 
            - **-m/--match <pattern\>** The pattern to detect to ban (string)
            - **-r/--reason <reason\>** The reason to send in DM to banned member (string)
            - **-l/--log_channel <channel\>** The channel to send logs when a new member is baned (integer)
            - **--delete:** If included, the pattern rule will be deleted
    - **Example:**
        `.autoban --reason="Vous avez été automatiquement banni en raison de votre pseudo laissant penser à un bot" --match=H0nda --log_channel=309117604289708032`
      
:::warning Warning
Please provide a clear pattern, if you set just `a`, all new member with `a` in their nickname will be baned
:::  
