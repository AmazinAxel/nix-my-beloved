<script setup>
    import { ArrowRightIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <div @click="navigateTo('/book')"
        class="flex items-center justify-center h-screen"
    >
        <button @click="navigateTo('/book')"
            class="bg-blue-2 p-5 rounded-md flex gap-3 vertical-align"
        >
            <div class="flex-col vertical-align">
                <h1 class="text-light-1 text-xl">Nix my beloved</h1>
                <h2 class="text-light-3 text-lg">(click to continue)</h2>
            </div>
            <ArrowRightIcon class="h-16 w-16 text-light-2 vertical-align"/>
        </button>
        <!-- images everywhere of nix flakes moving around and dancing, arrow to right with blue card and white background -->
    </div>
</template>
