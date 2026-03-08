<template>
    <div class="z-[20] absolute transition-all duration-[500ms] ease-out bg-light-1 p-4 rounded-lg drop-shadow-md">
        <div class="flex gap-[1rem]">
            <div class="basis-2/5 flex flex-col">
                <h1 class="text-[2rem] font-bold font-header leading-tight">u can make cool desktops with nix</h1>
                <p class="text-[1.5rem] italic font-body -mt-[8px] mb-[4px]">& NixOS</p>
                <p class="inline-flex items-center gap-1 text-[1rem] italic font-body opacity-75 leading-tight">just look at my desktop ></p>
                <ContinueBtn/>
            </div>
            <div class="basis-3/5 self-stretch">
                <NuxtImg class="w-full h-full object-cover rounded-md shadow-lg" src="/coeur-demo.png" loading="lazy"/>
            </div>
        </div>
    </div>
</template>
