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