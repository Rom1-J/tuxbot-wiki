---
id: Network
sidebar_label: Réseau
title: Commandes relatives au module Réseau
---

---


## Ip localise
- **`.iplocalise`** - Récupère de multiples informations sur une IP donnée.
    - **Utilisation:** `.iplocalise <ip> [params]`
    - **Alias:** `localiseip`
    - **Requis:** 
        - **ip:** L'IP sur laquelle vous voulez des informations (peut être IPv4, IPv6 ou nom de domaine).
    - **Optionnel:** 
        - **params:** 
            - **inet <inet\>** L'inet pour l'IP donnée (`4`, `6`)
            - **map** Si elle est fournie, une carte sera affichée à la suite de la commande
    - **Exemple:**
        ![exemple](/img/docs/commands/Network/iplocalise/example.png)
    
---

## CloudFlare
- **`.cloudflare`** - Tente de récupérer l'IP d'un domaine derrière CloudFlare.
    - **Utilisation:** `.cloudflare <ip>`
    - **Alias:** `cf`, `crimeflare`
    - **Requis:** 
        - **ip:** L'IP sur laquelle vous voulez des informations (doit être un nom de domaine).
    - **Exemple:**
        ![exemple](/img/docs/commands/Network/cloudflare/example.png)
      
:::info Note
Cette commande utilise un scrapper pour récupérer des informations à partir de [http://www.crimeflare.org:82/](http://www.crimeflare.org:82/)

Veuillez noter que la validité des informations fournies n'est pas vérifiée.
:::

---

## Obtenir des en-têtes
- **`.getheaders`** - Montre les en-têtes retournés par un domaine.
    - **Utilisation:** `.getheaders <ip> [user_agent]`
    - **Alias:** `headers`
    - **Requis:** 
        - **ip:** Le domaine pour lequel vous voulez les en-têtes.
    - **Optionnel:** 
        - **user_agent:** Un user-agent avec lequel appeler le domaine
    - **Exemple:**
        ![exemple](/img/docs/commands/Network/getheaders/example.png)

---

## Ping
- **`.ping`** - Montre les latences de websocket et de frappe de Tuxbot.
    - **Utilisation:** `.ping`

---

## Est-il en panne ?
- **`.isdown`** - Indique si le domaine donné est en panne ou non.
    - **Utilisation:** `.isdown <domain>`
    - **Alias:** `is_down`, `down?`
    - **Requis:** 
        - **domain:** Le domaine pour lequel vous voulez savoir.

---

## PeeringDB
- **`.peeringdb`** - Affiche des informations sur l'ASN donné.
    - **Utilisation:** `.peeringdb <asn>`
    - **Alias:** `peer`, `peering`
    - **Requis:** 
        - **asn:** L'ASN pour lequel vous souhaitez obtenir des informations.
    - **Exemple:**
        ![exemple](/img/docs/commands/Network/peeringdb/example.png)
