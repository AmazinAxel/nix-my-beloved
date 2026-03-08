<template>
    <div class="z-[20] absolute transition-all duration-[500ms] ease-out bg-light-1 p-4 rounded-lg drop-shadow-md">
        <div class="flex gap-[1rem]">
            <div class="basis-1/2">
                <h1 class="text-[2rem] font-bold font-header leading-tight">configuring = ez</h1>
                <p class="inline-flex gap-1 text-[1rem] font-body opacity-75 leading-tight">system configuring & packages done in a single file</p>
                <p class="inline-flex gap-1 text-[0.75rem] italic font-body opacity-50 leading-tight -mt-[10px]">(or flake)</p>
                <p class="inline-flex gap-1 text-[0.75rem] italic font-body opacity-50 leading-tight -mt-[10px]">just look at how convenient this is ></p>

                <ContinueBtn/>
            </div>
            <NuxtImg class="basis-1/2 w-full rounded-md shadow-lg" src="/config.png" loading="lazy"/>
        </div>
    </div>
</template>
