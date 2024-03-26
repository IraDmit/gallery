<template>
    <div class="select" :class="{ active: isOpen }">
        <span class="placeholder" @click=" isOpen = !isOpen">{{ placeholder }}<img src=" ../../assets/img/arr-down.svg"
                alt="arr"></span>
        <div class="options" :class="{ open: isOpen }">
            <input type="text" placeholder="From" v-model="filter.gte">
            <img src="../../assets/img/line.svg" alt="line">

            <input type="text" placeholder="Before" v-model="filter.lte">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
const isOpen = ref(false)
const { placeholder } = defineProps<{
    placeholder: string
}>()

const filter = reactive({
    gte: null,
    lte: null
})

const emit = defineEmits<{
    changeFilter: any
}>()

watch(filter, () => {
    emit('changeFilter', filter, 'date')
})
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
        width: 100%;
        z-index: 10;

        background-color: var(--bg);
        border-radius: 0 0 8px 8px;
        opacity: 0;
        visibility: hidden;
        border: 1px solid var(--border);
        border-top: none;
        padding: 20px;
        display: flex;
        grid-gap: 10px;

        input {
            border: 1px solid var(--placeholder-color);
            border-radius: 8px;
            background: var(--bg-filter);
            padding: 15px;
            max-width: 95px;
            color: var(--txt-color);
            font-family: Roboto;

            &:focus {
                border: 1px solid var(--border);

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