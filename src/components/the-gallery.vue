User
<template>
  <div class="gallery-wrp">
    <app-painting v-for="(item, idx) in props.paintings" :key="`picture${idx}`" :pictureInfo="item" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import appPainting from './app-painting.vue';

// Определим интерфейс для объекта рисунка
interface Painting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

// Определим пропсы компонента
const props = defineProps<{
  paintings: Painting[];
}>();

</script>

<style scoped lang="scss">
.gallery-wrp {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
