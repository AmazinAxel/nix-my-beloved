<script setup>
    const page = inject('page');
    const isReversing = inject('isReversing');
    const buttonParticles = inject('buttonParticles');
    import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid';
</script>
<template>
    <div class="flex items-center gap-[5px] self-start mt-auto">
        <button @pointerdown="(e) => {
            buttonParticles(e, 5);
            isReversing = true;
            page--
        }"
        class="
            group bg-blue-2 p-2 rounded-lg text-light-1 shadow-md font-body flex gap-[5px]
            opacity-70 cursor-pointer

            transition-all duration-[50ms] ease-out
            hover:opacity-100 hover:scale-105
            hover:shadow-lg hover:shadow-blue-1-500/50
            hover:bg-blue-1
        ">
            <ArrowLeftIcon class="
                h-5 w-5
                transition-all duration-[50ms] ease-out group-hover:translate-x-0.5"
            />
            Back
        </button>


        <button @pointerdown="(e) => {
            buttonParticles(e, 5);
            isReversing = false;
            page++
        }"
        class="
            group bg-blue-2 p-2 rounded-lg text-light-1 shadow-md font-body flex gap-[5px] cursor-pointer

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
    </div>
</template>
