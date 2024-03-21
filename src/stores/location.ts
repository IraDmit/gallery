import { defineStore } from 'pinia';
import axios, { type AxiosResponse } from 'axios';

interface Locations {
    id: number;
    location: string;
}

const useLocationsStore = defineStore('locationsStore', {
    state: () => ({
        locationsList: [] as Locations[],
    }),
    getters: {
        getLocationById: (state) => (id: number) => {
            const location = state.locationsList.find((location) => location.id === id)
            console.log(location?.location);
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
