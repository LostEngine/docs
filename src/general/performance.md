# LostEngine's Performance

As the main developer of LostEngine (Misieur), I really care about performance. This is why LostEngine is coded only using 
Minecraft's internal code which is always more optimized than famous libraries called 'modern' or whatever, that at the end
are just slow and may not even easier to use. I do not include Bukkit in this, but it is still not used as the Bukkit API exists 
for compatibility between Minecraft versions and LostEngine will not support multiple versions at the same time.

## What does LostEngine do when the server is running
When your Minecraft server has finished the bootstrap phase, this is what LostEngine does on each thread:

 - On the main thread (or Folia threads) when an item or a block is used, its modified version of the Minecraft code runs.
For example, custom TNTs are just a modified version of Minecraft's TNT block Java class, which means they are as optimized
as your Minecraft server itself and LostEngine will not be the one causing problems. This also means that LostEngine does not
check every time an item is used to know if it has to do something; it uses what Minecraft already has, like vanilla items 
and blocks do.
 - On the Netty threads (threads used for receiving and sending packets), LostEngine has to analyze any packets that are 
sent to the player or received in order to replace modded content with re-textured vanilla content and vice versa. 
This part has been tested and optimized a lot and is pretty much nothing compared to plugins like ViaVersion that require
way more calculations in order to translate packets between protocol versions.
 - *Other things like the web server are async and will not affect your Minecraft server's performance.*