<template>
    <div class="filters-wrp">
        <component :is="filter.component" v-for="(filter, idx) in filtersList" :key="`filter${idx}`"
            :placeholder="filter.placeholder" :store="filter.store" @changeFilter="changeFilter" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia';
import appInput from './fields/app-input.vue';
import appSelect from './fields/app-select.vue';
import appSelectDate from './fields/app-selectDate.vue';

import useAuthorsStore from '../stores/author';
import useLocationsStore from '../stores/location';

const { getAuthorsList } = storeToRefs(useAuthorsStore())
const { getLocationsList } = storeToRefs(useLocationsStore());

const filtersList = reactive(
    [{
        component: appInput,
        placeholder: 'Name',
        store: '',
        type: ''
    }, {
        component: appSelect,
        placeholder: 'Author',
        store: getAuthorsList,
        type: 'author'
    }, {
        component: appSelect,
        placeholder: 'Location',
        store: getLocationsList,
        type: 'location'
    }, {
        component: appSelectDate,
        placeholder: 'Created',
        store: '',
        type: ''
    }]
)

const emit = defineEmits<{
    updateFilter: [filter: any, type: string]
}>()

const changeFilter = (filter: any, type: string) => {
    emit('updateFilter', filter, type)
}

</script>

<style scoped lang="scss">
.filters-wrp {
    margin: 35px 0 45px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);

    }
}
</style>
