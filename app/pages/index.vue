<script setup>
    import { ArrowRightIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <div
        class="flex items-center justify-center h-screen bg-light-3"
    >
        <button @click="navigateTo('/book')"
            class="group bg-blue-2 p-5 rounded-md flex gap-3 content-center w-[17rem]

            transition-all duration-50 ease-out
            hover:scale-105 hover:shadow-lg hover:shadow-blue-1-500/50
         active:scale-95
            "
        >
            <div class="basis-3/4">
                <h1 class="text-light-1 text-xl"><strong>Nix</strong> my beloved</h1>
                <h2 class="text-light-3 text-lg">(click to continue)</h2>
            </div>
            <ArrowRightIcon class="
                basis-1/4 h-17 w-17 text-light-2

                transition-all duration-50 ease-out
                ease-in-out group-hover:translate-x-2
            "/>
        </button>
        <!-- images everywhere of nix flakes moving around and dancing, arrow to right with blue card and white background -->
    </div>
</template>
