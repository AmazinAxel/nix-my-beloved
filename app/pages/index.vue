<script setup>
    import { ArrowRightIcon } from '@heroicons/vue/24/solid';

    const open = ref(false); // is flipbook opened

    // fun particles
    import confetti from 'canvas-confetti';
    const particles = (loc, amount) => {
        confetti({
            particleCount: amount,
            origin: {
                x: loc.clientX / window.innerWidth,
                y: loc.clientY / window.innerHeight
            }
        })
    };

</script>

<template>
    <BookView v-if="open"/>
    <div v-else class="flex items-center justify-center h-screen bg-light-3 z-[10]" >
        <button
            @click="open = true"
            class="group bg-blue-2 p-5 rounded-md flex gap-3 content-center w-[17rem]

            transition-all duration-50 ease-out
            hover:scale-105 hover:shadow-lg hover:shadow-blue-1-500/50
            active:scale-95
            "
        >
            <div class="basis-3/4">
                <h1 class="text-light-1 text-xl"><strong>Nix</strong> is awesome</h1>
                <h2 class="text-light-3 text-lg">(click to continue)</h2>
            </div>
            <ArrowRightIcon class="
                basis-1/4 h-17 w-17 text-light-2

                transition-all duration-50 ease-out
                ease-in-out group-hover:translate-x-2
            "/>
        </button>
        <!-- images everywhere of nix flakes moving around and dancing, arrow to right with blue card and white background -->

        <div v-for="_ in 50"> <!-- spawns a bunch of nix flakes!! mixes styling tho -->
            <img src="/nix.svg" :style="{
                top: Math.random() * 100 + 'vh',
                left: Math.random() * 100 + 'vw',
                width: Math.min(Math.max((Math.random() * 50), 40), 50) + 'px',
                rotate: Math.random() * 100 + 'deg'
            }"

            @mouseenter="particles($event, 10, 100)"
            @click="particles($event, 10, 1000)"

            class="w-10 z-[0] absolute opacity-50

                transition-all duration-[1000ms] ease-out
                hover:rotate-[300deg] hover:scale-[3]
                active:scale-[1.2] active:rotate-[0deg]
            "/>
        </div>
    </div>
</template>
