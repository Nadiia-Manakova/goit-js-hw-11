import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getData = () => {
    const urlSeaParams = new URLSearchParams({
        key: '36867623-ba51f98b382c0f13b01ef8d79',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q: '',
    })
    return axios.get(`?${urlSeaParams}`).then(res => res.data)
}