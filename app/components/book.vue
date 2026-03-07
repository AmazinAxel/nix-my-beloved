<script setup>
    const page = inject('page'); // for flipbook page tracking
</script>

<template>
    <div v-if="page != 0" class="z-[20] absolute
    
        transition-all duration-[1000ms] ease-out
        ">
        <!-- animated flip book thing -->
        
        <Page1 v-if="page == 1"/>
        <Page2 v-if="page == 2"/>
    </div>
</template>
