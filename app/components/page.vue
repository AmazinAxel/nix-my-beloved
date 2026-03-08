<script setup>
    defineProps(['image']);
</script>

<template>
    <div class="z-[20] absolute transition-all duration-[500ms] ease-out bg-light-1 p-4 rounded-lg drop-shadow-md">
        <div class="flex gap-[1rem]">
            <div class="basis-2/5 flex flex-col"><slot/></div>
            <div class="basis-3/5 self-stretch">
                <NuxtImg class="w-full h-full object-cover rounded-md shadow-lg" :src="image" loading="lazy"/>
            </div>
        </div>
    </div>
</template>
