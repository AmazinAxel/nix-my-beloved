<!-- todo
 /* how this is gonna work
the randomcodeblocks code will grab a random element from this json and display it in the background scrolling and fading
might want to grab a random section from the expression since sometimes it can be long
*/
 -->

<template>
    <!--     loop 20 times:
        random spot on the background
        fade in, go down, code block
        then ??
-->
    <UCodeBlock :code="snippet" lang="nix" />
</template>

<script setup>
const snippet = `{ config, pkgs, ... }: {
  environment.systemPackages = with pkgs; [ git ];
}`
</script>
