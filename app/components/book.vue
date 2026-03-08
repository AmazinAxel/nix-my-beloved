<script setup>
    const page = inject('page'); // for flipbook page tracking
</script>

<template>
    <div class="z-[20] absolute
    
        transition-all duration-[500ms] ease-out
        bg-light-1
        p-4
        rounded-lg
        drop-shadow-md
        ">
        <!-- animated flip book thing -->
        
        <Page1 v-if="page == 1"/>
        <Page2 v-if="page == 2"/>
    </div>
</template>
