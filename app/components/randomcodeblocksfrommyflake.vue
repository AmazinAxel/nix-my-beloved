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
    <UProsePre class="bg-dark-1" language="nix">
        <span v-html="highlighted"/>
        <!-- todo make this actually look good as background -->
    </UProsePre>
</template>

<script setup>
import { codeToHtml } from 'shiki'; // syntax highlighting

// temp
const snippet = `{ config, pkgs, ... }: {
  environment.systemPackages = with pkgs; [ git ];
}`

const highlighted = ref(''); // will have to find a new way to inline this or something for a loop

onMounted(async () =>
    highlighted.value = await codeToHtml(snippet, { lang: 'nix', theme: 'nord' })
);
</script>

