<template>
  <div class="app" :data-theme="isLightTheme ? 'light' : 'dark'">
    <div class="container">
      <the-header @switchTheme="switchTheme" />
      <the-filters @updateFilter="updateFilter" />
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
const defaultOptions = ref(`_page=${currentPage.value}&_limit=${limit}`)

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
    });
}

const updateFilter = (filter: any, type: string) => {
  if (!filter) {
    handleFetchData(defaultOptions.value)
    return
  }
  switch (type) {
    case 'name': {
      changeName(filter)
      break;
    }
    case 'select': {
      filter.name ? changeAuthor(filter) : changeLocation(filter)
      break;
    }
    case 'date': {
      changeDate(filter)
      break;
    }
  }
}

const fetchDataWithDebounce = debounce(handleFetchData, 300);

fetchData(defaultOptions.value)
  .then(data => {
    paintingData.value = data;
    fetchAuthors();
    fetchLocations();
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error);
  });

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
  let options
  if (filter) {
    options = `locationId=${filter.id}`

  }
  fetchDataWithDebounce(options || defaultOptions.value)
}

const changeAuthor = (filter: Authors) => {
  let options
  if (filter) {
    options = `authorId=${filter.id}`
  }
  fetchDataWithDebounce(options || defaultOptions.value)
  console.log(options || defaultOptions.value);
}

const changeName = (filter: string) => {
  const options = `q=${filter}`
  fetchDataWithDebounce(options || defaultOptions.value)
}

const changeDate = (filter: { gte: number, lte: number }) => {
  const options = `gte=${filter.gte ? filter.gte : 0}&lte=${filter.lte ? filter.lte : 2024}`
  fetchDataWithDebounce(options || defaultOptions.value)
}
</script>

<style scoped>
.app {
  background: var(--bg);
  color: var(--txt-color);
  transition: .3s;
}
</style>
