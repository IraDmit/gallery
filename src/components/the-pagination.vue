<template>
    <div class="pagination">
        <paginationDoubleArrow class='pagination-arr prev last' :class="{ disable: currentPage === 1 }"
            @click="emitToCurrentPage(1)" />
        <pagination-arrow class='pagination-arr prev' :class="{ disable: currentPage === 1 }"
            @click="emitToCurrentPage(currentPage - 1)" />

        <div class="pagination-num" v-for="page in lastPage" :key="page" :class="{ active: currentPage === page }"
            @click="emitToCurrentPage(page)">
            {{ page }}
        </div>

        <pagination-arrow class='pagination-arr' :class="{ disable: currentPage === lastPage }"
            @click="emitToCurrentPage(currentPage + 1)" />

        <paginationDoubleArrow class='pagination-arr last' :class="{ disable: currentPage === lastPage }"
            @click="emitToCurrentPage(lastPage)" />
    </div>
</template>

<script setup lang="ts">
import paginationArrow from './pagination/pagination-arrow.vue'
import paginationDoubleArrow from './pagination/pagination-doubleArrow.vue'


const { lastPage, currentPage } = defineProps<{ lastPage: number, currentPage: number }>();

const emits = defineEmits<{
    toCurrentPage: [target: HTMLElement | number]
}>()

const emitToCurrentPage = (target: HTMLElement | number) => {
    emits('toCurrentPage', target);
}
</script>

<style scoped lang="scss">
.pagination {
    color: var(--txt-color);
    display: flex;
    padding: 40px 0;

    .prev {
        transform: rotate(180deg);
    }

    &-arr,
    &-num {
        cursor: pointer;
        padding: 10px 15px;
        border: 1px solid var(--border);

        &:hover {
            background: var(--pagination-hover);
        }

        &.last {
            border-radius: 0 10px 10px 0;
        }

        &.active {
            color: var(--active-txt);
            background-color: var(--active-bg);
        }

        &.disable {
            opacity: var(--disable-border);
            pointer-events: none;
        }
    }

    @media (max-width: 576px) {
        align-items: center;
        justify-content: center;
    }
}
</style>
