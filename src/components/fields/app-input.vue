<template>
    <input type="text" :placeholder="placeholder" v-model="name" @input="emit('changeFilter', name, 'name')">
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { placeholder } = defineProps<{
    placeholder: string
}>()

const name = ref()

const emit = defineEmits<{
    changeFilter: any
}>()


</script>

<style scoped lang="scss">
input {
    border: 1px solid var(--placeholder-color);
    border-radius: 8px;
    background: var(--bg-filter);
    padding: 15px;
    width: 100%;
    color: var(--txt-color);
    font-family: Roboto;

    &:focus {
        border: 1px solid var(--border);
    }

    &::placeholder {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0px;
        color: var(--placeholder-color)
    }
}
</style>