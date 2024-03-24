<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import messages from '@/locale/messages'

import Header from './layouts/header/Header.vue'
import Footer from './layouts/Footer.vue'
</script>

<template>
    <Header />

    <RouterView />

    <Footer />
</template>
