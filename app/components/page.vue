<script setup>
    defineProps(['image']);
</script>

<!-- styling is kind of a mess because of responsiveness but it works -->
<template>
    <div class="z-[20] absolute transition-all duration-[500ms] ease-out bg-light-1 p-4 rounded-lg drop-shadow-md max-h-[95vh] max-w-[100vw] [@media(min-width:50rem)]:max-w-[55rem] [@media(max-width:40rem)]:w-[85%] overflow-hidden flex flex-col">
        <div class="flex flex-col [@media(min-width:50rem)]:flex-row gap-[1rem] flex-1 min-h-0">
            <div class="[@media(min-width:50rem)]:basis-2/5 flex flex-col min-h-0"><slot/></div>
            <div class="[@media(min-width:50rem)]:basis-3/5 [@media(min-width:50rem)]:grow-0 [@media(min-width:50rem)]:max-w-[30rem] [@media(min-width:50rem)]:max-h-[30rem] flex-1 min-h-0 min-w-0">
                <NuxtImg class="w-full h-full object-cover rounded-md shadow-lg" :src="image" loading="lazy"/>
            </div>
        </div>
    </div>
</template>
