import { defineStore } from 'pinia';
import axios, { type AxiosResponse } from 'axios';

interface Authors {
  id: number;
  name: string;
}

const useAuthorsStore = defineStore('authorsStore', {
  state: () => ({
    authorsList: [] as Authors[],
  }),
  getters: {
    getAuthorById: (state) => (id: number) => {
      const author = state.authorsList.find((author) => author.id === id)
      console.log(author?.name);
      return author?.name
    },
    getAuthorsList: (state) => state.authorsList,
  },

  actions: {
    async fetchAuthors() {
      try {
        const response: AxiosResponse<Authors[]> = await axios.get('https://test-front.framework.team/authors');
        this.authorsList = response.data;
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    },
  },
});

export default useAuthorsStore;
