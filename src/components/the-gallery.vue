User
<template>
  <div class="gallery-wrp">
    <app-painting v-for="(item, idx) in props.paintings" :key="`picture${idx}`" :pictureInfo="item" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import appPainting from './app-painting.vue';
import { type Painting } from '../interfaces'

const props = defineProps<{
  paintings: Painting[];
}>();

</script>

<style scoped lang="scss">
.gallery-wrp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

  }

  @media (max-width: 576px) {

    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
