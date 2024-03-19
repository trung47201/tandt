<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import messages from '@/locale/messages'

import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>

<template>
    <header
        class="fixed w-full z-20 top-0 start-0 flex flex-col border-white border-b-[0.5px] md:h-[var(--header-height)] h-[var(--header-height-mobile)] shadow"
    >
        <div class="h-full flex sm:flex-col flex-row">
            <div
                class="flex md:h-[calc(100%-var(--nav-height))] h-full py-3 md:border-white md:border-b-[0.5px] w-full"
            >
                <div
                    class="flex xl:px-20 lg:px-16 md:px-12 px-8 mx-auto lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md w-full justify-between items-center"
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
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                                <font-awesome-icon icon="magnifying-glass" />
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                class="w-full p-2 ps-10 pe-3 pr-3 text-base bg-transparent focus:outline-none border border-white rounded-full flex items-center"
                                placeholder="Search..."
                                required
                                autocomplete="off"
                            />
                        </div>
                    </div>
                    <div
                        class="flex justify-between items-center gap-x-8 md:text-2xl sm:text-xl text-lg"
                    >
                        <div class="cursor-pointer">
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
                                        class="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-nowrap"
                                    >
                                        <div class="py-1">
                                            <MenuItem
                                                v-slot="{ active }"
                                                v-for="(message, locale) in messages"
                                                :key="locale"
                                                @click="$i18n.locale = locale"
                                                :value="locale"
                                            >
                                                <a
                                                    href="#"
                                                    :class="[
                                                        locale === $i18n.locale
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                        active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700'
                                                    ]"
                                                    >{{ message.name }}</a
                                                >
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                        <div class="cursor-pointer">
                            <RouterLink to="/cart">
                                <font-awesome-icon icon="fas fa-cart-plus" />
                            </RouterLink>
                        </div>
                        <div>
                            <div
                                class="flex items-center justify-center border-2 border-white rounded-full cursor-pointer"
                            >
                                <button type="button" @click="openModal">
                                    <font-awesome-icon icon="user" class="w-5 h-5 p-1" />
                                </button>
                            </div>
                            <TransitionRoot appear :show="isOpen" as="template">
                                <Dialog as="div" @close="closeModal" class="relative z-10">
                                    <TransitionChild
                                        as="template"
                                        enter="duration-300 ease-out"
                                        enter-from="opacity-0"
                                        enter-to="opacity-100"
                                        leave="duration-200 ease-in"
                                        leave-from="opacity-100"
                                        leave-to="opacity-0"
                                    >
                                        <div class="fixed inset-0 bg-black/25" />
                                    </TransitionChild>

                                    <div class="fixed inset-0 overflow-y-auto">
                                        <div
                                            class="flex min-h-full items-center justify-center p-4 text-center"
                                        >
                                            <TransitionChild
                                                as="template"
                                                enter="duration-300 ease-out"
                                                enter-from="opacity-0 scale-95"
                                                enter-to="opacity-100 scale-100"
                                                leave="duration-200 ease-in"
                                                leave-from="opacity-100 scale-100"
                                                leave-to="opacity-0 scale-95"
                                            >
                                                <DialogPanel
                                                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                                >
                                                    <DialogTitle
                                                        as="h3"
                                                        class="text-lg font-medium leading-6 text-gray-900"
                                                    >
                                                        Payment successful
                                                    </DialogTitle>
                                                    <div class="mt-2">
                                                        <p class="text-sm text-gray-500">
                                                            Your payment has been successfully
                                                            submitted. We’ve sent you an email with
                                                            all of the details of your order.
                                                        </p>
                                                    </div>

                                                    <div class="mt-4">
                                                        <button
                                                            type="button"
                                                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            @click="closeModal"
                                                        >
                                                            Got it, thanks!
                                                        </button>
                                                    </div>
                                                </DialogPanel>
                                            </TransitionChild>
                                        </div>
                                    </div>
                                </Dialog>
                            </TransitionRoot>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                class="h-[var(--nav-height)] xl:px-20 lg:px-16 md:px-12 px-8 mx-auto lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md w-full"
            >
                <div class="w-full h-full flex items-center justify-center">
                    <div class="flex items-center justify-between mx-auto h-full">
                        <div
                            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
                        ></div>
                        <div
                            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-sticky"
                        >
                            <ul
                                class="flex flex-col uppercase md:space-x-8 rtl:space-x-reverse md:flex-row lg:text-lg md:text-base text-sm"
                            >
                                <li>
                                    <RouterLink to="/" class="font-bold">
                                        {{ $t('translate.home') }}
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/products" class="font-bold">
                                        {{ $t('translate.products') }}
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/about" class="font-bold">
                                        {{ $t('translate.blog') }}
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/about" class="font-bold">
                                        {{ $t('translate.voucher') }}
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/about" class="font-bold">
                                        {{ $t('translate.contact') }}
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/about" class="font-bold">
                                        {{ $t('translate.about') }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
