import axios, { type AxiosResponse } from 'axios';
import { type Painting } from '../interfaces'

export const fetchData = async (options: string) => {
    try {
        const response: AxiosResponse<Painting[]> = await axios.get(`https://test-front.framework.team/paintings?${options}`);
        return response.data
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
};