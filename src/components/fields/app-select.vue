<template>
    <div class="select" :class="{ active: isOpen }" @click=" isOpen = !isOpen">
        <span class="placeholder">{{ filter }} <img src=" ../../assets/img/arr-down.svg" alt=""></span>
        <div class="options" :class="{ open: isOpen }" v-if="store">

            <div class="item-option" v-for="( option, idx ) in store" :key="`option${idx}`">{{
        option.name || option.location }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Locations, type Authors } from '../../interfaces'
import { ref } from 'vue'

interface Props {
    placeholder: string;
    store: Locations[] | Authors[];
}

const { placeholder, store } = defineProps<Props>();

const isOpen = ref(false)
const filter = ref(placeholder)
</script>

<style scoped lang="scss">
.select {
    border: 1px solid var(--placeholder-color);
    border-radius: 8px;
    background: var(--bg-filter);
    padding: 15px;
    cursor: pointer;
    color: var(--txt-color);
    font-family: Roboto;
    position: relative;

    .placeholder {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0px;
        color: var(--txt-color);
        display: flex;
        justify-content: space-between;
    }

    &.active {
        border: 1px solid var(--border);
        border-radius: 8px 8px 0 0;
    }

    .options {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 2px);
        z-index: 10;
        max-height: 345px;
        overflow-y: scroll;
        background-color: var(--bg);
        border-radius: 0 0 8px 8px;
        opacity: 0;
        visibility: hidden;
        border: 1px solid var(--border);
        border-top: 1px solid var(--placeholder-color);

        .item-option {
            padding: 15px 20px;

            &:hover {
                background-color: var(--active-bg);
                color: var(--active-txt)
            }
        }

        &.open {
            opacity: 1;
            visibility: visible;
        }
    }

    .options::-webkit-scrollbar {
        background: var(--bg);
        border-radius: 5px;
        width: 5px;
        margin-right: 8px;
    }

    .options::-webkit-scrollbar-thumb {
        background: rgb(123, 123, 123);
        border-radius: 10px;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
    }
}
</style>