<script setup>
    const page = inject('page');
    const buttonParticles = inject('buttonParticles');
    import { ArrowRightIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="transition-all duration-[400ms] ease-out">
        <button
            @mousedown="(event) => {
                buttonParticles(event, 20);
                isReversing = false;
                page = 1;
            }"
            class="group bg-blue-2 p-5 rounded-md flex gap-3 content-center w-[17rem] cursor-pointer

                transition-all duration-200 ease-out
                hover:scale-105 hover:shadow-lg hover:shadow-blue-1-500/50 hover:bg-blue-1
            ">
            <div class="basis-3/4">
                <h1 class="text-light-1 text-xl font-header"><strong>Nix</strong> my beloved</h1>
                <h2 class="text-light-3 font-body">click to open</h2>
            </div>
            <ArrowRightIcon class="
                basis-1/4 h-13 text-light-2

                transition-all duration-200 ease-out
                ease-in-out group-hover:translate-x-2
            "/>
        </button>
    </div>
</template>
