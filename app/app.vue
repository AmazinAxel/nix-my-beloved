<script setup>
  const page = ref(0); // flipbook page, 0 = not opened
  provide('page', page); // make var global

  // fun particles
  import confetti from 'canvas-confetti';

  const defaultParticles = {
    spread: 360,
    startVelocity: 5,
    flat: true, // looks better
    decay: 0.88, // how fast speed changes
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
  <div class="relative flex items-center justify-center h-screen bg-light-3 overflow-hidden">
    
    <!-- main button to card transition -->
    <div class="inset-0 flex items-center justify-center z-10">
      <Transition name="main" mode="out-in">
        <ClickToEnter v-if="page == 0"/>
        <Book v-else/>
      </Transition>
    </div>

    <div class="z-0" v-for="(_, i) in 50"> <!-- spawns a bunch of nix flakes!! mixes styling tho -->

      <!-- this styling is very messy but basically seperates all the flakes into a cell and randomizes location per cell -->
      <img src="/nix.svg" :style="{
        top: ((Math.floor(i / 10) * 20) + (Math.random() * 20)) + 'vh',
        left: (((i % 10) * 10) + (Math.random() * 10)) + 'vw',
        width:  Math.min(Math.max((Math.random() * 50), 40), 50) + 'px',
        rotate: (Math.random() * 360) + 'deg'
      }"

      @mouseenter="particlesFromLoc($event, 2)"
      @mousedown="(event) => {
        particlesFromLoc(event, 5)

        // i cant overwrite the other styles so we have to apply them manually unfortunately
        event.target.style.opacity = '0'
        event.target.style.transform = 'scale(-1) rotate(0deg)'
        event.target.style.pointerEvents = 'none'
      }"

      class="w-10 absolute opacity-50

        transition-all duration-[1000ms] ease-out
        hover:rotate-[300deg] hover:scale-[3]
      "/>
    </div>
  </div>
</template>


<style> /* todo fix this animation looks bad */
  .main-enter-from { transform: translateX(50rem); scale: 0.5; opacity: 0; }
  .main-leave-to { transform: translateX(-50rem); scale: 1; opacity: 0; }
</style>
