import { defineStore } from 'pinia';
import axios, { type AxiosResponse } from 'axios';
import { type Locations } from '../interfaces'


const useLocationsStore = defineStore('locationsStore', {
    state: () => ({
        locationsList: [] as Locations[],
    }),
    getters: {
        getLocationById: (state) => (id: number) => {
            const location = state.locationsList.find((location) => location.id === id)
            return location?.location
        },
        getLocationList: (state) => state.locationsList,
    },

    actions: {
        async fetchLocations() {
            try {
                const response: AxiosResponse<Locations[]> = await axios.get('https://test-front.framework.team/locations');
                this.locationsList = response.data;
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        },
    },
});

export default useLocationsStore;
