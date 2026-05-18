<script setup>
  const page = ref(0); // flipbook page, 0 = not opened
  const isReversing = ref(false); // flipbook going backwards
  const easterEggFlakeCount = ref(1); // for tracking easter egg
  const isTransitioning = ref(false); // fixes glitchiness of easter egg

  // make vars global
  provide('page', page);
  provide('isReversing', isReversing);

  // fun particles
  import confetti from 'canvas-confetti';
  
  // keybinds so i get extra heart
  onMounted(() => window.addEventListener('keydown', (e) => { // forward
    if (((e.code === 'Space') || (e.code === 'Enter') || (e.code === 'ArrowRight')) && page.value < 14) {
      isReversing.value = false;
      page.value++;
    }}
  ));

  onMounted(() => window.addEventListener('keydown', (e) => { // back
    if (((e.code === 'ArrowLeft')) && page.value > 0) {
      isReversing.value = true;
      page.value--;
    }}
  ));


  const defaultParticles = {
    spread: 360,
    startVelocity: 5,
    flat: true, // looks better
    decay: 0.88, // changes speed
    gravity: 0.1,
    ticks: 25,
    shapes: ['square'],
    colors: ['#5e81ac', '#81a1c1'],
  };

  const particlesFromLoc = (loc, amount) => {
    confetti({
      particleCount: amount,
      ...defaultParticles,
      origin: {
        x: loc.clientX / window.innerWidth,
        y: loc.clientY / window.innerHeight
      }
    })
  };

  const heartParticles = (loc) => {
    const heart = confetti.shapeFromPath({
      path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    }); // heart shaped SVG!

    confetti({
      particleCount: 3,
      startVelocity: 5,
      spread: 100,
      angle: 90, // up
      gravity: -0.3, // float up
      decay: 0.94,
      ticks: 100,
      scalar: 2.4,
      flat: true, // looks so weird with twirling
      shapes: [ heart ],
      colors: [ '#bf616a', '#d08770' ], // nord colors
      origin: {
        x: loc.clientX / window.innerWidth,
        y: loc.clientY / window.innerHeight,
      },
    });
  };

  // spreads out the particles thruout the button
  const buttonParticles = (event, amount) => {
    const rect = event.currentTarget.getBoundingClientRect()
    for (let i = 0; i < amount; i++) {
      confetti({
        particleCount: 1,
        ...defaultParticles,
        origin: {
          x: (rect.left + Math.random() * rect.width) / window.innerWidth,
          y: (rect.top + Math.random() * rect.height) / window.innerHeight
        }
      });
    };
  };
  provide('buttonParticles', buttonParticles);
</script>

<template>
  <!-- center everything -->
  <div class="relative flex items-center justify-center h-screen overflow-hidden transition-all duration-[1s]" :class="page == 14 ? ['bg-dark-1'] : ['bg-light-3']">
    
    <!-- main transitions -->
    <div class="inset-0 flex items-center justify-center z-10 transition-all duration-[0.3s]">
      <Transition
        :name="isReversing ? 'back' : 'forward'"
        mode="out-in"
        @before-enter="isTransitioning = true"
        @after-enter="isTransitioning = false">

        <!-- fun lil easter egg -->
        <NuxtImg src="/nix.svg" v-if="easterEggFlakeCount == 0"
          @mouseenter="particlesFromLoc($event, 2)"
          @mousedown="(event) => { heartParticles(event, 3); particlesFromLoc(event, 2); }"

          class="w-50 absolute cursor-pointer transition-all duration-[1000ms] ease-out rotate-[5deg]"
          :class="isTransitioning
            ? 'pointer-events-none'
            : 'hover:rotate-[190deg] hover:scale-[1.2] active:rotate-[170deg] active:scale-[0.9]'
      "/>

        <ClickToOpen v-else-if="page == 0"/>
        <Page1 v-else-if="page == 1"/>
        <Page2 v-else-if="page == 2"/>
        <Page3 v-else-if="page == 3"/>
        <Page4 v-else-if="page == 4"/>
        <Page5 v-else-if="page == 5"/>
        <Page6 v-else-if="page == 6"/>
        <Page7 v-else-if="page == 7"/>
        <Page8 v-else-if="page == 8"/>
        <Page9 v-else-if="page == 9"/>
        <Page10 v-else-if="page == 10"/>
        <Page11 v-else-if="page == 11"/>
        <Page12 v-else-if="page == 12"/>
        <Page13 v-else-if="page == 13"/>
        <Conclusion v-else="page == 14"/>
      </Transition>
    </div>

    <!-- preload all images!!! -->
    <div class="hidden">
      <NuxtImg src='/builderrors.png' loading="eager"/>
      <NuxtImg src='/coeur-demo.png' loading="eager"/>
      <NuxtImg src='/config.png' loading="eager"/>
      <NuxtImg src='/favicon.png' loading="eager"/>
      <NuxtImg src='/nix.svg' loading="eager"/>
      <NuxtImg src='/nixcon.png' loading="eager"/>
      <NuxtImg src='/nixeverything.png' loading="eager"/>
      <NuxtImg src='/nixpet.gif' loading="eager"/>
      <NuxtImg src='/packages.png' loading="eager"/>
      <NuxtImg src='/patching.png' loading="eager"/>
      <NuxtImg src='/RG35XX-H.png' loading="eager"/>
      <NuxtImg src='/sobernotworking-old.png' loading="eager"/>
      <NuxtImg src='/thatsalotofmodules.png' loading="eager"/>
    </div>


    <Randomcodeblocksfrommyflake v-if="page == 14"/> <!-- background flake code for last page -->

    <div class="z-0" v-for="(_, i) in 50"> <!-- spawns a bunch of nix flakes!! mixes styling tho -->

      <!-- this styling is very messy but basically seperates all the flakes into a cell and randomizes location per cell -->
      <NuxtImg src="/nix.svg" :style="{
        top: ((Math.floor(i / 10) * 20) + (Math.random() * 20)) + 'vh',
        left: (((i % 10) * 10) + (Math.random() * 10)) + 'vw',
        width:  Math.min(Math.max((Math.random() * 50), 40), 50) + 'px',
        transform: 'rotate(' + (Math.random() * 360) + 'deg)' // wish i could just use rotate
      }"

      @mouseenter="particlesFromLoc($event, 2)"
      @mousedown="(event) => {
        particlesFromLoc(event, 5)

        // i cant overwrite the other styles so we have to apply them manually unfortunately
        event.target.style.opacity = '0'
        event.target.style.transform = 'scale(-1) rotate(0deg)'
        event.target.style.pointerEvents = 'none'
        easterEggFlakeCount--
      }"

      class="w-10 absolute opacity-50 cursor-pointer

        transition-all duration-[1000ms] ease-out
        hover:rotate-[300deg] hover:scale-[3]
      "/>
    </div>
    <p class="absolute font-header text-dark-1 bottom-[1rem] opacity-50" v-if="page != 14 && easterEggFlakeCount != 0">tip: u can press [space] or use arrow keys to continue</p>
  </div>
</template>

<style> /* transition between continue button and flipbook */

  /* forward */
  .forward-enter-from { transform: translateX(20rem); scale: 0.85; opacity: 0; }
  .forward-leave-to { transform: translateX(-15rem); scale: 0.85; opacity: 0; }

  /* back */
  .back-enter-from { transform: translateX(-20rem); scale: 0.85; opacity: 0; }
  .back-leave-to { transform: translateX(15rem); scale: 0.85; opacity: 0; }
</style>
