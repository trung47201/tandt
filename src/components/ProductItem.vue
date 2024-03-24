<script setup>
function formatPriceVI(value) {
    return (value / 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
function formatPriceEN(value) {
    return (value / 1)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
defineProps({
    products: {
        type: [],
        required: true
    }
})
</script>

<template>
    <div class="grid md:grid-cols-4 grid-cols-2 w-full mx-auto xl:gap-12 lg:gap-8 md:gap-6 gap-4">
        <div class="flex flex-wrap" v-for="product in products" :key="product.id">
            <div class="w-full flex flex-col">
                <a href="#">
                    <img
                        :src="product.image_url"
                        alt="Card img"
                        class="object-cover object-center w-full sm:max-h-[16rem] h-[100%] lg:h-[16rem]"
                    />
                </a>
                <div class="flex flex-grow">
                    <div class="triangle"></div>
                    <div class="flex flex-col justify-between sm:py-4 py-0 text">
                        <div>
                            <a
                                href="#"
                                class="inline-block sm:text-sm text-xs mb-2 font-bold capitalize hover:text-[var(--color-blue)] capitalize"
                                >{{ product.category }}</a
                            >
                            <a
                                href="#"
                                class="block mb-2 lg:text-xl sm:text-base text-sm font-black leading-tight hover:text-[var(--color-blue)]"
                            >
                                {{ product.name }}
                            </a>
                            <div class="flex gap-3">
                                <p
                                    class="sm:mb-2 mb-1 lg:text-xl font-black leading-tight text-[var(--color-orange)]"
                                >
                                    {{ formatPriceEN(product.sale_price, $i18n.locale) }}₫
                                </p>
                                <p class="text-xs line-through">
                                    {{ formatPriceEN(product.old_price, $i18n.locale) }}₫
                                </p>
                            </div>
                            <div class="flex items-center gap-2 sm:text-sm text-xs">
                                <div class="flex items-center gap-1">
                                    <p>{{ product.rating }}</p>
                                    <font-awesome-icon
                                        icon="star"
                                        class="text-[var(--color-orange)]"
                                    />
                                </div>
                                <p>|</p>
                                <p>{{ $t('sold') }} ({{ product.sold }})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
