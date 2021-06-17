---
id: Custom
sidebar_label: Personnalisé
title: Commandes relatives au module Personnalisé
---

---


## Personnalisé
- **`.custom`** - Commande principale pour interagir avec les paramètres personnalisés.
    - **Alias:** `perso`
---
- **`.custom locale`** - Définissez la langue dans laquelle vous souhaitez que le bot réponde.
    - **Utilisation:** `.custom locale <custom_locale>`
    - **Alias:** `langue`, `lang`
    - **Requis:** 
        - **custom_locale:** La langue que vous souhaitez définir (`en`, `fr`)
---
- **`.custom alias`** - Définit un alias pour lequel le bot attribuera une commande.
    - **Utilisation:** `.custom alias <command> | <custom_alias>`
    - **Alias:** `aliases`
    - **Requis:** 
        - **command:** Le nom de la commande que vous voulez remplacer (peut être une sous-commande avec des args).
        - **custom_alias:** The name of the command you want to replace (can be a subcommand with args).
