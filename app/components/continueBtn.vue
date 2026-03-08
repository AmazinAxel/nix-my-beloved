<script setup>
    const page = inject('page');
    const buttonParticles = inject('buttonParticles');
    import { ArrowRightIcon } from '@heroicons/vue/24/solid';
</script>
<template>
    <button @pointerdown="(e) => {
        buttonParticles(e, 5);
        page++
    }"
    class="
        group bg-blue-2 p-2 rounded-lg text-light-1 shadow-md font-body bottom-[1rem] left-[1rem] fixed flex items-center gap-[5px]

        transition-all duration-[50ms] ease-out
        hover:scale-105
        hover:shadow-lg hover:shadow-blue-1-500/50
        hover:bg-blue-1
    ">
        Continue
        <ArrowRightIcon class="
            h-5 w-5
            transition-all duration-[50ms] ease-out group-hover:translate-x-0.5"
        />
    </button>
</template>
