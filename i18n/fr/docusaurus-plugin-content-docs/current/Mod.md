---
id: Mod
sidebar_label: Mod
title: Commandes relatives au module Mod
---

---
:::info Note
Certaines commandes peuvent nécessiter les autorisations suivantes :
- `Manage Roles`
- `Kick Members`
- `Ban Members`
- `Manage Messages`
:::  


## Langue
- **`.lang`** - Commande principale pour interagir avec les paramètres de la langue.
    - **Alias:** `locale`, `langue`
    - **Permissions:** `Administrateur`
---
- **`.lang set`** - Définit la langue dans laquelle vous souhaitez que le bot réponde sur le serveur.
    - **Utilisation:** `.lang set <locale>`
    - **Alias:** `define`, `choice`
    - **Requis:** 
        - **locale:** La langue que vous souhaitez définir (`en`, `fr`).
---
- **`.lang list`** - Affiche toutes les langues disponibles.
    - **Utilisation:** `.lang list`
    - **Alias:** `liste`, `all`, `view`
    
---

## Règle
- **`.rule`** - Commande principale pour interagir avec les règles du serveur.
    - **Utilisation:** `.rule <rule_id> [members]`
    - **Alias:** `rules`, `regle`, `regles`
    - **Requis:** 
        - **rule_id:** Le numéro de la règle que vous voulez rappeler (entier).
    - **Optionnel:** 
        - **members:** Les membres que vous souhaitez avertir (peut être un nom d'utilisateur, une mention, un identifiant ou un surnom).
---
- **`.rule list`** - Affiche toutes les règles du serveur.
    - **Utilisation:** `.rule list`
    - **Alias:** `show`, `all`
---
- **`.rule add`** - Ajoute une règle.
    - **Utilisation:** `.rule add <rule>`
    - **Permissions:** `Administrateur` 
    - **Requis:** 
        - **rule:** Le contenu de la règle que vous voulez définir (chaîne de caractères).
---
- **`.rule edit`** - Modifie une règle.
    - **Utilisation:** `.rule edit <rule_id> <rule>`
    - **Permissions:** `Administrateur` 
    - **Requis:** 
        - **rule_id:** Le numéro de la règle que vous voulez modifier (entier).
        - **rule:** Le nouveau contenu de cette règle (chaîne de caractères).
---
- **`.rule delete`** - Supprime une règle.
    - **Utilisation:** `.rule delete <rule_id>`
    - **Permissions:** `Administrateur` 
    - **Requis:** 
        - **rule_id:** Le numéro de la règle que vous voulez supprimer (entier).
---
- **`.rule update`** - Met à jour le message des règles.
    - **Utilisation:** `.rule update <message_id>`
    - **Permissions:** `Administrateur` 
    - **Requis:** 
        - **message_id:** Le message que vous voulez modifier.
    
---

## Sourdine
- **`.mute`** - Commande principale pour interagir avec les sourdine.
    - **Utilisation:** `.mute <member> [reason]`
    - **Permissions:** `Administrateur` 
    - **Requis:** 
        - **members:** Les membres que vous voulez mettre en sourdine.
    - **Optionnel:** 
        - **reason:** La raison de cette mise en sourdine.
---
- **`.mute set`** - Définit le rôle de sourdine.
    - **Utilisation:** `.mute set <role>`
    - **Alias:** `define`
    - **Requis:** 
        - **role:** Le rôle à utiliser pour les sourdines (peut être la mention du rôle ou l'id de rôle).
    
---

## Autoban
- **`.autoban`** - Ajoute un modèle de nom d'utilisateur spécifique à bannir lors de l'arrivé.
    - **Utilisation:** `.autoban <args>`
    - **Requis:** 
        - **args:** 
            - **-m/--match <pattern\>** Le motif à détecter pour les bans (chaîne de caractères)
            - **-r/--reason <reason\>** La raison à envoyer en MP au membre banni (chaîne de caractères)
            - **-l/--log_channel <channel\>** Le salon dans lequel envoyer les logs quand un nouveau membre est banni (entier)
            - **--delete:** Si inclus, la règle sera supprimée
    - **Example:**
        `.autoban --reason="Vous avez été automatiquement banni en raison de votre pseudo laissant penser à un bot" --match=H0nda --log_channel=309117604289708032`
      
:::warning Avertissement
Veuillez fournir un modèle clair, si vous mettez juste `a`, tous les nouveaux membres avec `a` dans leur surnom seront bannis.
:::  
