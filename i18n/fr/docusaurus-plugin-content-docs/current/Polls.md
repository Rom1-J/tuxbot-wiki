---
id: Polls
sidebar_label: Sondages
title: Commandes relatives au module Sondages
---

---


## Sondages
- **`.polls`** - Commande principale pour interagir avec les sondages.
    - **Alias:** `poll`, `sondages`, `sondage`
---
- **`.polls create`** - Crée un sondage.
    - **Utilisation:** `.polls create <question> | <answer A> | <answer B> | ...`
    - **Alias:** `new`, `nouveau`
    - **Requis:**
        - **question:** La question pour le sondage
        - **answers:** Les réponses possibles
    - **Exemple:**
      ![exemple](/img/docs/commands/Polls/create/example.png)
---
- **`.polls propose`** - Propose une nouvelle réponse à un sondage.
    - **Utilisation:** `.polls propose <poll_id> <idea>`
    - **Alias:** `suggest`, `ajout`
    - **Requis:**
        - **poll_id:** L'identifiant du sondage tel que #47 ou l'identifiant/mention du message du sondage.
        - **idea:** La nouvelle réponse que vous voulez ajouter
