<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div
        class="flex lg:flex-row flex-col items-center lg:justify-center justify-start lg:gap-4 gap-2"
    >
        <img :src="icon" alt="" class="sm:w-full w-[36px] max-w-[60px]" />
        <div class="flex flex-col lg:items-start items-center">
            <p class="lg:text-lg md:text-base sm:text-sm text-xs font-bold md:text-nowrap">
                {{ $t(title) }}
            </p>
            <p class="md:text-base sm:text-sm text-xs md:!leading-5 text-center lg:text-left">
                {{ $t(description) }}
            </p>
        </div>
    </div>
</template>
