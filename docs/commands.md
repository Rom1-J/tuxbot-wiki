---
id: commands
title: Commands
---

:::info Note
### Good to know:
- The default prefix for tuxbot is `.`. If you have changed it to something else, it will only respond to the new prefix. If you forgot your prefix, you can always mention `@Tuxbot#8729` as a prefix.
- `<>` refers to a mandatory argument for the command.
- `[]` refers to an optional argument.
  
**Do not include these symbols!**
:::

## Custom
---
- **`.custom`** - Main command to interact with custom settings.
    - **Aliases:** `perso`
---
- **`.custom locale`** - Set the language you want the bot to respond to.
    - **Usage:** `.custom locale <custom_locale>`
    - **Alias:** `langue`, `lang`
    - **Required:** 
        - **custom_locale:** The language you want to set (`en`, `fr`)
---
- **`.custom alias`** - Define an alias for which the bot will assign a command.
    - **Usage:** `.custom alias <command> | <custom_alias>`
    - **Aliases:** `aliases`
    - **Required:** 
        - **command:** The name of the command you want to replace (can be a subcommand with args).
        - **custom_alias:** The name of the command you want to replace (can be a subcommand with args).

## Dev
---
- **`.http`** - Shows information about an HTTP code.
    - **Usage:** `.http <http_code>`
    - **Required:** 
        - **http_code:** The HTTP code for which you want information.

## Linux
---
- **`.cnf`** - Shows the name of the package to install when a command is not found.
    - **Usage:** `.cnf <command>`
    - **Required:** 
        - **command:** The command you want to use.
    - **Example:**
        ![example](/img/docs/commands/Linux/cnf/example.png)
        
:::info Note
This command use a scrapper to retrieve information from [https://command-not-found.com/](https://command-not-found.com/)

Please note that the owner of the site has been informed and has given his opinion on this use.
:::

## Math
---
- **`.wolf`** - Evaluate content in [WolframAlpha](https://wolframalpha.com).
    - **Usage:** `.wolf <query>`
    - **Aliases:** `wolfram`
    - **Required:** 
        - **query:** The content you want to eval.
    - **Example:**
        ![example](/img/docs/commands/Math/wolf/example.png)
      
:::info Note
Due to WolframAlpha rate limit on its API, this command has a cooldown of 1 execution every 10sec per user
:::  
---
- **`.latex`** - Render a LaTeX expression.
    - **Usage:** `.latex <latex>`
    - **Aliases:** `tex`
    - **Required:** 
        - **latex:** The LaTeX you want to render.
    - **Example:**
        ![example](/img/docs/commands/Math/latex/example.png)
---
- **`.graph`** - Decomposes an expression into a graph.
    - **Usage:** `.graph <expr>`
    - **Required:** 
        - **expr:** The expression to decompose.
    - **Example:**
        ![example](/img/docs/commands/Math/graph/example.png)