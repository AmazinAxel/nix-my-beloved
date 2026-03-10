<!-- todo
might want to grab a random section from the expression since sometimes it can be long
 -->

<script setup>
  import { codeToHtml } from 'shiki'; // syntax highlighting
  import nixflakecode from "./mynixflakecode.json";

  const codethings = ref([]); // all the code backround codeblock things

  async function codeLoop(codething) {
    while (true) { // repeat foreverr

      // starting
      codething.transitionStop = true;
      codething.opacity = 0;
      codething.translateY = 0;
      codething.y = Math.random() * 40;
      codething.html = await codeToHtml(nixflakecode[Math.floor(Math.random() * nixflakecode.length)], { lang: 'nix', theme: 'nord' });

      await sleep(100); // fix things not animating back down, idk why

      // fade in and go down
      codething.transitionStop = false;
      codething.opacity = 0.18;
      codething.translateY = 180;

      // fade out
      await sleep(9000);
      codething.opacity = 0;
      await sleep(Math.random() * 1000 + 1500);
    };
  };

  codethings.value = Array.from({ length: 6 }, (_, i) => ({ // objects
    x: (i) * 20, // even spacing so it doesnt overlap as much
    y: 0,
    opacity: 0,
    translateY: 0,
    transitionStop: false,
    html: ''
  }));

  onMounted(() => {
    // dont spawn them at the same time
    codethings.value.forEach(codethingy =>
      sleep(Math.random() * 30000).then(() => codeLoop(codethingy))
    )
  });

  // helper
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
</script>

<template>
    <div
      v-for="(codething, i) in codethings"
      :key="i"
      class="absolute pointer-events-none z-0 w-100 max-h-70 overflow-hidden"
      :style="{
        left: codething.x + 'vw',
        top: codething.y + 'vh',
        opacity: codething.opacity,
        transform: `translateY(${codething.translateY}px)`, // go down

        // fixes bug by not having animation when finished
        transition: codething.transitionStop ? 'none' : 'transform 10s linear, opacity 1s linear'
      }"
    > <!-- tbh i couldnt find how to do animations like that so i just hardcoded the styling -->

    <span v-html="codething.html"/> <!-- syntax highlighted code -->
  </div>
</template>
