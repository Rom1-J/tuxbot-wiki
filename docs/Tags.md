---
id: Tags
sidebar_label: Tags
title: Commands related to the Tags module
---

---


## Tag
- **`.tag`** - Main command to interact tag.
    - **Usage:** `.tag <tag_name>`
    - **Required:** 
        - **tag_name:** The tag you want to get.
---
- **`.tag delete`** - Deletes a tag.
    - **Usage:** `.tag delete <tag_name>`
    - **Required:** 
        - **tag_name:** The tag you want to delete.
---
- **`.tag create`** - Creates a taf.
    - **Usage:** `.tag create <tag_name> <content>`
    - **Alias:** `add`
    - **Required:** 
        - **tag_name:** The name you want to use for the tag.
        - **content:** The content of the tag.
---
- **`.tag edit`** - Edits a tag.
    - **Usage:** `.tag edit <tag_name> <content>`
    - **Required:** 
        - **tag_name:** The tag name you want to edit.
        - **content:** The new content for this tag.
---
- **`.tag info`** - Retrieves information on a tag.
    - **Usage:** `.tag info <tag_name>`
    - **Alias:** `owner`
    - **Required:** 
        - **tag_name:** The tag name you want to know more.
---
- **`.tag search`** - Searches for a tag with a pattern.
    - **Usage:** `.tag search <pattern>`
    - **Alias:** `find`
    - **Required:** 
        - **pattern:** The pattern you want to search.
---
- **`.tag list`** - Lists all tag for a member.
    - **Usage:** `.tag list [member]`
    - **Optional:** 
        - **member:** The member you want to list all tags (if not set, your tags will be shown).
---
- **`.tag all`** - Shows all tags for the current guild.
    - **Usage:** `.tag all`
---
- **`.tag claim`** - Claims a tag if the owner is not longer on the guild.
    - **Usage:** `.tag claim <tag_name>`
    - **Required:** 
        - **tag_name:** The tag name you want to claim.
    