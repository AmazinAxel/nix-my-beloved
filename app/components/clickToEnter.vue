<script setup>
    const page = inject('page');
    const buttonParticles = inject('buttonParticles');
    import { ArrowRightIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="transition-all duration-[300ms] ease-out">
        <button
            @mousedown="(event) => {
                buttonParticles(event, 20)
                page = 1
            }"
            class="group bg-blue-2 p-5 rounded-md flex gap-3 content-center w-[17rem]

                transition-all duration-50 ease-out
                hover:scale-105 hover:shadow-lg hover:shadow-blue-1-500/50
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
    </div>
</template>
