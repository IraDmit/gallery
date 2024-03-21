<template>
  <div class="container">
    <the-header />
    <the-gallery :paintings="paintingData" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios, { type AxiosResponse } from 'axios';
import theHeader from './navigation/the-header.vue';
import theGallery from './components/the-gallery.vue';
import useAuthorsStore from './stores/author.ts';
import useLocationsStore from './stores/location.ts';

const paintingData = ref();
interface Painting {
  authorId: number,
  created: string,
  id: number,
  imgUrl: string,
  locationId: number,
  name: string
}

let isDataLoaded = false;
const { fetchAuthors } = useAuthorsStore();
const { fetchLocations } = useLocationsStore();

const fetchData = async () => {
  try {
    const response: AxiosResponse<Painting[]> = await axios.get('https://test-front.framework.team/paintings');
    paintingData.value = response.data; // Выполняем запрос
    console.log(response.data); // Выводим данные в консоль
    isDataLoaded = true; // Устанавливаем флаг, что данные загружены
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error); // Обрабатываем ошибку
  }
};

onMounted(() => {
  if (!isDataLoaded) {
    fetchData(); // Вызываем функцию загрузки данных только если они еще не загружены
    fetchAuthors()
    fetchLocations()
  }
});
</script>

<style scoped>
#app {
  background: rgb(0, 0, 0);
  color: #fff;
}

/* Стилизация компонента */
</style>
