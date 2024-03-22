import axios, { type AxiosResponse } from 'axios';
import { type Painting } from '../interfaces'
export const fetchData = async (page: number = 1, limit: number = 12) => {
    try {
        const response: AxiosResponse<Painting[]> = await axios.get(`https://test-front.framework.team/paintings?_page=${page}&_limit=${limit}`);

        console.log(response.data); // Выводим данные в консоль
        return response.data
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error); // Обрабатываем ошибку
    }
};