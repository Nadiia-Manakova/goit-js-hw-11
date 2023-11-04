import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getData = async (searchQuery, page = 1) => {
    try {
        const urlSeaParams = new URLSearchParams({
            key: '36867623-ba51f98b382c0f13b01ef8d79',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            q: searchQuery, 
            page,
            per_page: 40,
        });

        const response = await axios.get(`?${urlSeaParams}`);
        return response.data; 
    } catch (error) {
        return error
    }
};