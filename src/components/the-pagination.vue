<template>
    <div class="pagination">
        <img src="../assets/img/double-arrow.svg" alt="" class='pagination-arr prev last'
            :class="{ disable: currentPage === 1 }" @click="emitToCurrentPage(1)">
        <img src="../assets/img/arrow.svg" alt="" class='pagination-arr prev' :class="{ disable: currentPage === 1 }"
            @click="emitToCurrentPage(currentPage - 1)">


        <div class="pagination-num" v-for="page in lastPage" :key="page" :class="{ active: currentPage === page }"
            @click="emitToCurrentPage(page)">
            {{ page }}
        </div>


        <img src="../assets/img/arrow.svg" alt="" class='pagination-arr' :class="{ disable: currentPage === lastPage }"
            @click="emitToCurrentPage(currentPage + 1)">
        <img src=" ../assets/img/double-arrow.svg" alt="" class='pagination-arr last'
            :class="{ disable: currentPage === lastPage }" @click="emitToCurrentPage(lastPage)">
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { lastPage, currentPage } = defineProps<{ lastPage: number, currentPage: number }>();

const emits = defineEmits<{
    toCurrentPage: [target: HTMLElement | number] // Валидатор для toCurrentPage
}>()

const emitToCurrentPage = (target: HTMLElement | number) => {
    emits('toCurrentPage', target);
}
</script>

<style scoped lang="scss">
.pagination {
    color: #fff;
    display: flex;
    padding: 40px 0;

    .prev {
        transform: rotate(180deg);
    }

    &-arr,
    &-num {
        cursor: pointer;
        padding: 10px 15px;
        border: 1px solid rgb(255, 255, 255);

        &.last {
            border-radius: 0 10px 10px 0;
        }

        &.active {
            color: #000;
            background-color: #fff;
        }

        &.disable {
            opacity: .6;
        }
    }
}
</style>
