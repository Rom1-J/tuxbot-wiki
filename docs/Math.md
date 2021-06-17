---
id: Math
sidebar_label: Math
title: Commands related to the Math module
---

---


## WolframAlpha
- **`.wolf`** - Evaluates content in [WolframAlpha](https://wolframalpha.com).
    - **Usage:** `.wolf <query>`
    - **Aliases:** `wolfram`
    - **Required:** 
        - **query:** The content you want to eval.
    - **Example:**
        ![example](/img/docs/commands/Math/wolf/example.png)
      
:::info Note
Due to WolframAlpha rate limit on its API, this command has a cooldown of 1 execution every 10sec per user.
:::  
    
---

## LaTeX
- **`.latex`** - Renders a LaTeX expression.
    - **Usage:** `.latex <latex>`
    - **Aliases:** `tex`
    - **Required:** 
        - **latex:** The LaTeX you want to render.
    - **Example:**
        ![example](/img/docs/commands/Math/latex/example.png)
    
---

## Graph
- **`.graph`** - Decomposes an expression into a graph.
    - **Usage:** `.graph <expr>`
    - **Required:** 
        - **expr:** The expression to decompose.
    - **Example:**
        ![example](/img/docs/commands/Math/graph/example.png)
      
