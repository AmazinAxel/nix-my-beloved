<!-- todo
might want to grab a random section from the expression since sometimes it can be long
 -->

<script setup>
  import { codeToHtml } from 'shiki'; // syntax highlighting
  import nixflakecode from "./mynixflakecode.json";

  //shuffle(nixflakecode);

  onMounted(async () =>
    highlighted.value = await codeToHtml(snippet, { lang: 'nix', theme: 'nord' })
  );

  // the all famous shuffling algorithm https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };
  };
</script>


<template>
  <div class="z-0" v-for="(_, i) in 20"> <!-- TODO fix the flakes not animating properly -->

    <!-- grody styling thing copied from app.vue -->
      <UProsePre :style="{
        top: ((Math.floor(i / 10) * 20) + (Math.random() * 20)) + 'vh',
        left: (((i % 10) * 10) + (Math.random() * 10)) + 'vw',
        width:  Math.min(Math.max((Math.random() * 50), 40), 50) + 'px',
        rotate: (Math.random() * 360) + 'deg'
      }"
      class="bg-dark-3 w-10 absolute opacity-20 transition-all duration-[10000ms] ease-in-out"
      language="nix">
        <!-- get a random spot on the background
          get a random code from shuffle(nixflakecode)[0]
          fade in, go down, then fade out and start again
        -->

        <span v-html="highlighted"/>
    </UProsePre>
  </div>

    <!-- loop 5 times:
        random spot on the background
        fade in, go down, code block
        then ??
-->
</template>

