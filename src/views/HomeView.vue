<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import slide1 from '@/assets/images/home/slide1.jpg'
import slide2 from '@/assets/images/home/slide2.jpg'
import slide3 from '@/assets/images/home/slide3.jpg'
import slide4 from '@/assets/images/home/slide4.jpg'

defineOptions({
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    }
})

const slides = [slide1, slide2, slide3, slide4]
</script>

<template>
    <main class="md:mt-[var(--header-height)] mt-[var(--header-height-mobile)] w-full">
        <!-- <carousel :autoplay="2000" :wrap-around="true" :items-to-show="1">
            <slide v-for="slide in slides" :key="slide">
                <img :src="slide" alt="" />
            </slide>

            <template #addons>
                <navigation />
                <pagination class="text" />
            </template>
        </carousel> -->

        <!-- <div
            class="flex xl:px-20 lg:px-16 md:px-12 px-8 mx-auto lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md w-full"
        >
            <div class="grid sm:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8 w-full">
                <div
                    class="flex lg:flex-row flex-col items-center lg:justify-center justify-start lg:gap-4 gap-2"
                >
                    <img src="@/assets/images/home/freeship64.png" alt="" />
                    <div class="flex flex-col lg:items-start items-center">
                        <p class="lg:text-lg md:text-base text-sm font-bold">
                            {{ $t('translate.freeship') }}
                        </p>
                        <p class="md:text-base text-sm md:!leading-5 text-center lg:text-left">
                            {{ $t('For orders over 100.000₫') }}
                        </p>
                    </div>
                </div>
                <div
                    class="flex lg:flex-row flex-col items-center lg:justify-center justify-start lg:gap-4 gap-2"
                >
                    <img src="@/assets/images/home/payment.png" alt="" />
                    <div class="flex flex-col lg:items-start items-center">
                        <p class="lg:text-lg md:text-base text-sm font-bold">
                            {{ $t('COD') }}
                        </p>
                        <p class="md:text-base text-sm md:!leading-5">
                            {{ $t('Cash on Delivery') }}
                        </p>
                    </div>
                </div>
                <div
                    class="flex lg:flex-row flex-col items-center lg:justify-center justify-start lg:gap-4 gap-2"
                >
                    <img src="@/assets/images/home/vip.png" alt="" />
                    <div class="flex flex-col lg:items-start items-center">
                        <p class="lg:text-lg md:text-base text-sm font-bold">
                            {{ $t('VIP Customers') }}
                        </p>
                        <p class="md:text-base text-sm md:!leading-5">
                            {{ $t('Super deal') }}
                        </p>
                    </div>
                </div>
                <div
                    class="flex lg:flex-row flex-col items-center lg:justify-center justify-start lg:gap-4 gap-2"
                >
                    <img src="@/assets/images/home/warranty64.png" alt="" />
                    <div class="flex flex-col lg:items-start items-center">
                        <p class="lg:text-lg md:text-base text-sm font-bold">
                            {{ $t('Warranty Support') }}
                        </p>
                        <p class="md:text-base text-sm md:!leading-5">
                            {{ $t('At all stores') }}
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
    </main>
</template>
