---
id: Tags
sidebar_label: Tags
title: Commandes relatives au module Tags
---

---


## Tag
- **`.tag`** - Commande principale pour interagir avec les tags.
    - **Utilisation:** `.tag <tag_name>`
    - **Requis:** 
        - **tag_name:** Le tag que vous voulez obtenir.
---
- **`.tag delete`** - Supprime le tag.
    - **Utilisation:** `.tag delete <tag_name>`
    - **Requis:** 
        - **tag_name:** Le tag que vous voulez supprimer.
---
- **`.tag create`** - Crée un tag.
    - **Utilisation:** `.tag create <tag_name> <content>`
    - **Alias:** `add`
    - **Requis:** 
        - **tag_name:** Le nom que vous voulez utiliser pour le tag.
        - **content:** Le contenu du tag.
---
- **`.tag edit`** - Modifie un tag.
    - **Utilisation:** `.tag edit <tag_name> <content>`
    - **Requis:** 
        - **tag_name:** Le nom du tag que vous voulez modifier.
        - **content:** Le nouveau contenu pour ce tag.
---
- **`.tag info`** - Récupère les informations sur un tag.
    - **Utilisation:** `.tag info <tag_name>`
    - **Alias:** `owner`
    - **Requis:** 
        - **tag_name:** Le nom du tag dont vous voulez savoir plus.
---
- **`.tag search`** - Recherche un tag avec un motif.
    - **Utilisation:** `.tag search <pattern>`
    - **Alias:** `find`
    - **Requis:** 
        - **pattern:** Le motif que vous voulez rechercher.
---
- **`.tag list`** - Liste tous les tags pour un membre.
    - **Utilisation:** `.tag list [member]`
    - **Optionnel:** 
        - **member:** Le membre pour lequel vous souhaitez afficher tous les tags (s'il n'est pas défini, vos tags seront affichés).
---
- **`.tag all`** - Affiche tous les tags du serveur actuel.
    - **Utilisation:** `.tag all`
---
- **`.tag claim`** - Réclame un tag si le propriétaire ne fait plus partie du serveur.
    - **Utilisation:** `.tag claim <tag_name>`
    - **Requis:** 
        - **tag_name:** Le nom du tag que vous voulez revendiquer.
    
