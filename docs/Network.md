---
id: Network
sidebar_label: Network
title: Commands related to the Network module
---

---


## Ip localise
- **`.iplocalise`** - Retrieves multiple information about given IP.
    - **Usage:** `.iplocalise <ip> [params]`
    - **Aliases:** `localiseip`
    - **Required:** 
        - **ip:** The IP on which you want information (can be IPv4, IPv6 or domain name).
    - **Optional:** 
        - **params:** 
            - **inet <inet\>** The inet for given IP (`4`, `6`)
            - **map** If provided, a map will be displayed as a result of the command
    - **Example:**
        ![example](/img/docs/commands/Network/iplocalise/example.png)
    
---

## CloudFlare
- **`.cloudflare`** - Trys to retrieve the IP of a domain behind CloudFlare.
    - **Usage:** `.cloudflare <ip>`
    - **Aliases:** `cf`, `crimeflare`
    - **Required:** 
        - **ip:** The IP on which you want information (must be a domain name).
    - **Example:**
        ![example](/img/docs/commands/Network/cloudflare/example.png)
      
:::info Note
This command use a scrapper to retrieve information from [http://www.crimeflare.org:82/](http://www.crimeflare.org:82/)

Please note that the validity of the information provided is not verified.
:::

---

## Get headers
- **`.getheaders`** - Shows the headers returned by a domain.
    - **Usage:** `.getheaders <ip> [user_agent]`
    - **Aliases:** `headers`
    - **Required:** 
        - **ip:** The domain for which you want the headers.
    - **Optional:** 
        - **user_agent:** A user agent with which to call the domain
    - **Example:**
        ![example](/img/docs/commands/Network/getheaders/example.png)

---

## Ping
- **`.ping`** - Shows the websocket and typing latencies of Tuxbot.
    - **Usage:** `.ping`

---

## Is down ?
- **`.isdown`** - Shows if the given domain is down or not.
    - **Usage:** `.isdown <domain>`
    - **Aliases:** `is_down`, `down?`
    - **Required:** 
        - **domain:** The domain for which you want to know.

---

## PeeringDB
- **`.peeringdb`** - Shows information about given ASN.
    - **Usage:** `.getheaders <asn>`
    - **Aliases:** `peer`, `peering`
    - **Required:** 
        - **asn:** The ASN for which you want information.
    - **Example:**
        ![example](/img/docs/commands/Network/peeringdb/example.png)