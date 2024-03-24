<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

const splitTitle = () => {
    return props.title.split('')
}
</script>

<template>
    <div class="shadows">
        <span v-for="letter in splitTitle()" :key="letter">
            {{ letter }}
        </span>
    </div>
</template>

<style scoped>
.shadows {
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #ced0d3;
    color: var(--color-white);
    letter-spacing: -0.05em;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    transition: all 0.25s ease-out;
}
.shadows span {
    font-weight: 900;
}
.shadows:hover {
    text-shadow: -16px 6px 15px #ced0d3;
}
</style>
