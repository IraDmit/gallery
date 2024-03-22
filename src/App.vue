<template>
  <div class="container">
    <the-header />
    <the-gallery :paintings="paintingData" />
    <the-pagination :lastPage="countMaxPage" :currentPage="currentPage" @toCurrentPage="handleToCurrentPage" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import theHeader from './navigation/the-header.vue';
import thePagination from './components/the-pagination.vue'
import theGallery from './components/the-gallery.vue';
import useAuthorsStore from './stores/author';
import useLocationsStore from './stores/location';
import { fetchData } from './service'
import { useRouter } from 'vue-router'

const paintingData = ref();
const router = useRouter()
const limit = 12
const { fetchAuthors } = useAuthorsStore();
const { fetchLocations } = useLocationsStore();

const currentPage = ref(1)
const countMaxPage = computed(() => {
  return Math.ceil(33 / limit)
})

fetchData()
  .then(data => {
    paintingData.value = data;
    fetchAuthors();
    fetchLocations();
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  });

const handleToCurrentPage = (page: HTMLElement | number) => {
  if (typeof page === 'number') {
    currentPage.value = page;
  } else {
    currentPage.value = +page.textContent!;
  }
  router.push({ path: '/', query: { page: currentPage.value } })

  fetchData(currentPage.value)
    .then(data => {
      paintingData.value = data;
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
    });
}
</script>

<style scoped>
#app {
  background: rgb(0, 0, 0);
  color: #fff;
}
</style>
