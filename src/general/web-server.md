---
outline: deep
---

# LostEngine Integrated Web Server

## Introduction
LostEngine has an integrated web server for sending the resource pack to players and for the [Web Editor](/general/web-editor).
It can work two different ways. The first one, like every other plugins, creates a separate HTTP server on a second port,
this is great if you have multiple ports available on your server, but it needs to be configured manually. The second option,
will use your Minecraft server's TCP connection to create an HTTP server, this means that the same port as your Minecraft server will be 
used for the Web server. It works by detecting when a packet from a handshake connection is sent to your server, if it looks like
an HTTP request or not. If it is the case, it switches the packet handler to LostEngine's HTTP packet handler and works the same as 
on a second port without affecting it or removing any feature.

## Configuring it
::: code-group

```yaml [config.yml]
pack_hosting:
  resource_pack_prompt: "Download the Lost Engine resource pack"
  self_hosted:
    enabled: true  # [!code highlight]
    hostname: 0.0.0.0 # your server's public IP address [!code highlight]
    use_minecraft_port: true # if it uses Minecraft's port or `port` below [!code highlight]
    port: 7270 # if not using `use_minecraft_port` [!code highlight]
  external_host:
    enabled: false # [!code highlight]
    url: ""
```

:::
