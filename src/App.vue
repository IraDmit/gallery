<template>
  <div class="app" :data-theme="isLightTheme ? 'light' : 'dark'">
    <div class="container">
      <the-header @switchTheme="switchTheme" />
      <the-filters @changeLocation="changeLocation" @changeAuthor="changeAuthor" @changeName="changeName"
        @changeDate="changeDate" />
      <the-gallery :paintings="paintingData" />
      <the-pagination :lastPage="countMaxPage" :currentPage="currentPage" @toCurrentPage="handleToCurrentPage" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import theHeader from './navigation/the-header.vue';
import thePagination from './components/the-pagination.vue'
import theGallery from './components/the-gallery.vue';
import theFilters from './components/the-filters.vue';
import useAuthorsStore from './stores/author';
import useLocationsStore from './stores/location';
import { fetchData } from './service'
import { useRouter } from 'vue-router'
import { type Authors, type Locations } from './interfaces';
import { debounce } from './utils';

const paintingData = ref();
const router = useRouter()
const limit = 12
const currentPage = ref(1)
const isLightTheme = ref(false)
const deafaultOptions = ref(`_page=${currentPage.value}&_limit=${limit}`)

const { fetchAuthors } = useAuthorsStore();
const { fetchLocations } = useLocationsStore();

const countMaxPage = computed(() => {
  return Math.ceil(33 / limit)
})

const handleFetchData = (options: string) => {
  fetchData(options)
    .then(data => {
      paintingData.value = data;
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
    }
    );
}

fetchData(deafaultOptions.value)
  .then(data => {
    paintingData.value = data;
    fetchAuthors();
    fetchLocations();
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  }
  );

const switchTheme = () => {
  isLightTheme.value = !isLightTheme.value
}

const handleToCurrentPage = (page: HTMLElement | number) => {
  if (typeof page === 'number') {
    currentPage.value = page;
  } else {
    currentPage.value = +page.textContent!;
  }
  router.push({ path: '/', query: { page: currentPage.value } })
  const options = `_page=${currentPage.value}&_limit=${limit}`
  fetchData(options)
    .then(data => {
      paintingData.value = data;
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
    });
}

const changeLocation = (filter: Locations) => {
  console.log(filter);
  const options = `locationId=${filter.id}`
  handleFetchData(options || deafaultOptions.value)
}
const changeAuthor = (filter: Authors) => {

  const options = `authorId=${filter.id}`
  handleFetchData(options || deafaultOptions.value)
}
const changeName = (filter: string) => {

  const options = `q=${filter}`
  debounce(
    function () {
      handleFetchData(options || deafaultOptions.value)

    }
  )
}
const changeDate = (filter: { gte: number, lte: number }) => {

  const options = `_gte=${filter.gte ? filter.gte : 0}&_lte=${filter.lte ? filter.lte : 2024}`
  debounce(
    () => handleFetchData(options || deafaultOptions.value)
  )
}
</script>

<style scoped>
.app {
  background: var(--bg);
  color: var(--txt-color);
  transition: .3s;
}
</style>
