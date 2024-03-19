<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import messages from '@/locale/messages'

import Header from './layouts/Header.vue'
</script>

<template>
    <Header />

    <RouterView />
</template>
