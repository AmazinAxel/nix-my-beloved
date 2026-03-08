<template>
    <div class="z-[20] absolute transition-all duration-[500ms] ease-out bg-light-1 p-4 rounded-lg drop-shadow-md">
        <div class="flex gap-[1rem]">
            <div class="basis-1/4">
                <h1 class="text-[2rem] font-bold font-header leading-tight">sometimes breaks my packages >:(</h1>
                <p class="inline-flex items-center gap-1 text-[1rem] italic font-body opacity-75 leading-tight">but saves me time not having to package stuff myself</p>
                <!--right side has image of pks repo with text saying "this image is live" and pics of random eval errors like msedge with angry face-->
                <ContinueBtn/>
            </div>
            <NuxtImg class="basis-3/4 w-full rounded-md shadow-lg" src="/coeur-demo.png" loading="lazy"/>
        </div>
    </div>
</template>