<template>
    <nav
        class="md:h-[var(--nav-height)] xl:px-20 lg:px-16 md:px-12 mx-auto lg:max-w-screen-xl md:max-w-screen-lg sm:max-w-screen-md w-full"
    >
        <div class="w-full h-full flex items-center md:justify-center">
            <div class="flex items-center justify-between md:mx-auto h-full">
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
                <div
                    class="items-center justify-between w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul
                        class="flex flex-col gap-y-3 uppercase md:space-x-8 rtl:space-x-reverse md:flex-row lg:text-lg md:text-base text-sm"
                    >
                        <li>
                            <RouterLink
                                to="/"
                                class="font-bold hover:text-[var(--color-blue)] hover:underline"
                            >
                                {{ $t('translate.home') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/products"
                                :class="[
                                    'font-bold hover:text-[var(--color-blue)] hover:underline',
                                    $route.name == 'products' ? 'active ' : ''
                                ]"
                            >
                                {{ $t('translate.products') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/accessories"
                                :class="[
                                    'font-bold hover:text-[var(--color-blue)] hover:underline',
                                    $route.name == 'accessories' ? 'active ' : ''
                                ]"
                            >
                                {{ $t('translate.accessories') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/blog"
                                :class="[
                                    'font-bold hover:text-[var(--color-blue)] hover:underline',
                                    $route.name == 'blog' ? 'active ' : ''
                                ]"
                            >
                                {{ $t('translate.blog') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/voucher"
                                :class="[
                                    'font-bold hover:text-[var(--color-blue)] hover:underline',
                                    $route.name == 'voucher' ? 'active ' : ''
                                ]"
                            >
                                {{ $t('translate.voucher') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/contact"
                                :class="[
                                    'font-bold hover:text-[var(--color-blue)] hover:underline',
                                    $route.name == 'contact' ? 'active ' : ''
                                ]"
                            >
                                {{ $t('translate.contact') }}
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                to="/about"
                                :class="[
                                    'font-bold hover:text-[var(--color-blue)] hover:underline',
                                    $route.name == 'about' ? 'active ' : ''
                                ]"
                            >
                                {{ $t('translate.about') }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
