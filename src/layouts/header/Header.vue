<script setup>
import { RouterLink } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import messages from '@/locale/messages'
import Navigation from '@/layouts/header/Navigation.vue'
import LanguageButton from '@/layouts/header/LanguageButton.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
const isRotated = ref(false)
const isLanguage = ref(false)
const handleLanguage = (e) => {
    isRotated.value = !isRotated.value
    isLanguage.value = !isLanguage.value
}
</script>

<template>
    <header
        class="bg-[var(--main-background-color)] fixed w-full z-20 top-0 start-0 flex flex-col border-[var(--color-white)] border-b-[0.5px] md:h-[var(--header-height)] h-[var(--header-height-mobile)] shadow"
    >
        <div class="h-full flex flex-col">
            <div
                class="flex md:h-[calc(100%-var(--nav-height))] h-full py-3 md:border-[var(--color-white)] md:border-b-[0.5px] w-full"
            >
                <div
                    class="flex xl:px-20 lg:px-16 md:px-12 px-6 mx-auto lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md w-full justify-between items-center"
                >
                    <div class="h-full">
                        <RouterLink to="/" class="h-full flex items-center">
                            <img src="@/assets/images/logo.png" class="h-full" alt="TiShoes Logo" />
                            <img
                                src="@/assets/images/shop-name.png"
                                class="h-[24px] sm:h-[36px]"
                                alt="shop name"
                            />
                        </RouterLink>
                    </div>
                    <div class="md:flex hidden items-center lg:w-96 md:w-72 sm:w-48">
                        <div class="relative w-full">
                            <div
                                class="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer"
                            >
                                <font-awesome-icon icon="magnifying-glass" />
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                class="w-full p-2 ps-10 pe-3 pr-3 text-base bg-transparent focus:outline-none border border-[var(--color-white)] rounded-full flex items-center"
                                placeholder="Search..."
                                required
                                autocomplete="off"
                            />
                        </div>
                    </div>
                    <div
                        class="flex justify-between items-center gap-x-8 md:text-2xl sm:text-xl text-lg"
                    >
                        <div class="cursor-pointer md:block hidden">
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton>
                                        <font-awesome-icon icon="earth-americas" />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-[var(--color-white)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-nowrap"
                                    >
                                        <LanguageButton />
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                        <div class="cursor-pointer md:block hidden">
                            <RouterLink to="/cart">
                                <font-awesome-icon icon="fas fa-cart-plus" />
                            </RouterLink>
                        </div>
                        <div class="cursor-pointer md:flex hidden items-center">
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton class="flex">
                                        <font-awesome-icon
                                            icon="user"
                                            class="w-5 h-5 p-1 border rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-[var(--color-white)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-nowrap"
                                    >
                                        <div class="py-1">
                                            <MenuItem v-slot="{ active }">
                                                <a
                                                    @click="$router.push('/profile')"
                                                    :class="[
                                                        'block px-4 py-2 text-sm',
                                                        active || $route.name === 'profile'
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    ]"
                                                >
                                                    Profile
                                                </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                                <div
                                                    :class="[
                                                        'block px-4 py-2 text-sm',
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    ]"
                                                >
                                                    Logout
                                                </div>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                        <div class="md:hidden block">
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton>
                                        <font-awesome-icon icon="bars" />
                                    </MenuButton>
                                </div>
                                <transition
                                    enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95"
                                >
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-[var(--main-background-color)] shadow focus:outline-none text-nowrap"
                                    >
                                        <div>
                                            <div class="pl-6 pr-8 py-3">
                                                <RouterLink to="/profile">
                                                    <div
                                                        class="flex items-center text-sm font-bold gap-2 cursor-pointer"
                                                    >
                                                        <font-awesome-icon
                                                            icon="user"
                                                            class="w-5 h-5 p-1 border rounded-full"
                                                        />
                                                        Do Van Trung
                                                    </div>
                                                </RouterLink>
                                            </div>
                                            <div class="px-6 py-3 border-y">
                                                <RouterLink to="/cart">
                                                    <div
                                                        class="flex items-center justify-between gap-x-4 cursor-pointer"
                                                    >
                                                        <div
                                                            class="text-sm uppercase font-bold hover:underline hover:text-[var(--color-blue)]"
                                                        >
                                                            GO TO CART
                                                        </div>
                                                        <font-awesome-icon icon="share" />
                                                    </div>
                                                </RouterLink>
                                            </div>
                                            <div class="pl-6 pr-10 py-3">
                                                <Navigation />
                                            </div>
                                            <div class="border-y px-6 py-3">
                                                <div class="cursor-pointer">
                                                    <div
                                                        class="flex items-center justify-between text-sm uppercase font-bold"
                                                        @click="handleLanguage"
                                                    >
                                                        <div
                                                            class="text-sm uppercase font-bold hover:underline hover:text-[var(--color-blue)]"
                                                        >
                                                            Language
                                                        </div>
                                                        <font-awesome-icon
                                                            icon="chevron-right"
                                                            :class="[
                                                                'rotate',
                                                                isRotated ? 'down' : ''
                                                            ]"
                                                        />
                                                    </div>
                                                    <Transition :duration="100" name="nested">
                                                        <div v-if="isLanguage" class="outer">
                                                            <LanguageButton class="inner" />
                                                        </div>
                                                    </Transition>
                                                </div>
                                            </div>
                                            <div class="px-6 py-3 pb-5">
                                                <div
                                                    class="flex items-center justify-between cursor-pointer"
                                                >
                                                    <div
                                                        class="text-sm uppercase font-bold hover:underline hover:text-[var(--color-blue)]"
                                                    >
                                                        Logout
                                                    </div>
                                                    <font-awesome-icon icon="share-square" />
                                                </div>
                                            </div>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:block hidden">
                <Navigation />
            </div>
        </div>
    </header>
</template>

<style>
/* transition icon arrow  */
.rotate {
    -moz-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
.rotate.down {
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

/* transition menu */
.nested-enter-active,
.nested-leave-active {
    transition: all 0.1s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.1s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.1s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.1s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0.001;
}
</style>
