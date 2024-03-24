<script setup>
import { MenuItem } from '@headlessui/vue'
import messages from '@/locale/messages'
</script>

<template>
    <div class="py-1 md:pt-1 pt-2">
        <MenuItem
            v-for="(message, locale) in messages"
            :key="locale"
            @click="$i18n.locale = locale"
            :value="locale"
        >
            <a
                href="#"
                :class="[
                    locale === $i18n.locale
                        ? 'bg-gray-100 text-gray-900 md:font-normal font-bold'
                        : 'md:text-gray-700',
                    'block px-4 md:py-2 text-sm md:mb-0 mb-1'
                ]"
                >{{ message.name }}</a
            >
        </MenuItem>
    </div>
</template>
