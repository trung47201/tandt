<script setup>
// icon used in fontawesome 5
const contacts = [
    {
        icon: 'map-marked-alt', // address
        info: 'Xuân Kỳ - Đông Xuân - Sóc Sơn - Hà Nội'
    },
    {
        icon: 'envelope-open', // email
        info: 't4sev2@gmail.com'
    },
    {
        icon: 'phone', // phone
        info: '0369 796 359'
    }
]
</script>

<template>
    <div class="lg:mt-28 md:mt-20 sm:mt-16 mt-10 border-[var(--color-white)] border-t shadow">
        <div
            class="flex sm:flex-row flex-col gap-y-4 py-4 sm:py-12 sm:pb-10 xl:px-20 lg:px-16 md:px-12 px-6 mx-auto lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md w-full justify-between"
        >
            <div class="md:block hidden">
                <RouterLink to="/" class="flex flex-col items-center">
                    <img
                        src="@/assets/images/logo.png"
                        class="h-[60px] md:h-[80px] lg:h-[100px]"
                        alt="TiShoes Logo"
                    />
                    <img
                        src="@/assets/images/shop-name.png"
                        class="h-[24px] sm:h-[60px]"
                        alt="shop name"
                    />
                </RouterLink>
            </div>
            <div class="dm:mt-2">
                <div class="lg:text-2xl md:text-xl sm:text-lg text-base font-bold sm:mb-4 mb-2">
                    About us
                </div>
                <div class="flex flex-col gap-1 sm:text-base text-sm">
                    <div
                        class="flex items-center gap-3"
                        v-for="(contact, index) in contacts"
                        :key="index"
                    >
                        <font-awesome-icon :icon="contact.icon" />
                        <p>{{ contact.info }}</p>
                    </div>
                </div>
            </div>
            <div class="md:mt-2">
                <div class="lg:text-2xl md:text-xl sm:text-lg text-base font-bold sm:mb-4 mb-1">
                    Find us in social media
                </div>
                <div class="flex sm:text-2xl text-xl gap-4 items center">
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                    </a>
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'tiktok']" />
                    </a>
                </div>
            </div>
        </div>
        <div class="h-[36px] flex items-center justify-center border-[var(--color-white)] border-t">
            © T4sev2. All right reserved.
        </div>
    </div>
</template>
