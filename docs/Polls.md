---
id: Polls
sidebar_label: Polls
title: Commands related to the Polls module
---

---


## Polls
- **`.polls`** - Main command to interact with polls.
    - **Aliases:** `poll`, `sondages`, `sondage`
---
- **`.polls create`** - Set the language you want the bot to respond to.
    - **Usage:** `.polls create <question> | <answer A> | <answer B> | ...`
    - **Alias:** `new`, `nouveau`
    - **Required:** 
        - **question:** The question for the poll
        - **answers:** The possible answers
    - **Example:**
        ![example](/img/docs/commands/Polls/create/example.png)
---
- **`.polls propose`** - Propose a new answer for a poll.
    - **Usage:** `.polls propose <poll_id> <idea>`
    - **Alias:** `suggest`, `ajout`
    - **Required:** 
        - **poll_id:** The poll id such as #47 or the message id/mention of the poll
        - **idea:** The new answer you want to add