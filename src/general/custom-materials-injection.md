# Custom Material Injection

## Introduction
For years, the Bukkit project has always used a Java enumeration named `Material` to tell developers which item is which.
This is great but in Java, enumerations aren't meant for being modified in any way, which means it would normally
be impossible for LostEngine to add the new items and blocks to this list. So I made this [cool library](https://github.com/misieur/justamaterial)
that gets rid of the enumeration provided by Bukkit when it is loaded and creates a new one from scratch that contains 
the Bukkit code and LostEngine's custom items and blocks using the [ByteBuddy Java library](https://bytebuddy.net/).

## How to use it

:::code-group

```yaml [config.yml]
...
inject_custom_materials: true # [!code focus]
...
``` 

Then, LostEngine will create new enumeration constants named like your item ID in uppercase [snake case](https://en.wikipedia.org/wiki/Snake_case),
for example `lost_engine:my_cool_item` becomes `LOST_ENGINE_MY_COOL_ITEM` in the Bukkit Material enumeration.