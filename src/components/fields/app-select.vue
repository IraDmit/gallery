<template>
    <div class="select" :class="{ active: isOpen }" @click="isOpen = !isOpen">
        <div class="placeholder">
            <span class="txt">{{ filter || placeholder }}</span>
            <div class="actions">
                <img src="../../assets/img/x.svg" alt="close" v-if="filter" @click="clearFilter">
                <img src="../../assets/img/arr-down.svg" alt="arr">
            </div>
        </div>
        <div class="options" :class="{ open: isOpen }" v-if="store">
            <div class="item-option" v-for="(option, idx) in store" :key="`option${idx}`" @click="chooseOption(option)">
                {{ getOptionName(option) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { type Locations, type Authors } from '../../interfaces';
import { ref } from 'vue';

interface Props {
    placeholder: string;
    store: (Locations | Authors)[];
}

const { placeholder, store } = defineProps<Props>();
const emit = defineEmits<{ changeFilter: any }>();

const isOpen = ref(false);
const filter = ref<any>(null);

const chooseOption = (target: Locations | Authors) => {
    filter.value = target;
    emit('changeFilter', target, 'select');
};

const clearFilter = () => {
    isOpen.value = false;
    filter.value = null;
    emit('changeFilter', null, 'select');
};

const getOptionName = (option: Locations | Authors): string => {
    if ('name' in option) {
        return (option as Authors).name || '';
    } else if ('location' in option) {
        return (option as Locations).location || '';
    }
    return '';
};
</script>

<style scoped lang="scss">
.select {
    border: 1px solid var(--placeholder-color);
    border-radius: 8px;
    background: var(--bg-filter);
    cursor: pointer;
    color: var(--txt-color);
    font-family: Roboto;
    position: relative;

    .placeholder {
        padding: 15px;
        display: flex;
        justify-content: space-between;

        .txt {

            font-family: Roboto;
            font-size: 13px;
            font-weight: 400;
            line-height: 15px;
            letter-spacing: 0px;
            color: var(--txt-color);
        }

        .actions {
            display: flex;
            grid-gap: 10px;
        }

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