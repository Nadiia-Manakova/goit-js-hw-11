import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {getData} from './api'


const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');

formEl.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
    evt.preventDefault();
    const value = evt.target.elements.searchQuery.value.trim();
    if (!value) return;
    
    console.log(value)
    try {
        const { totalHits, hits } = await getData(value);
        if (!hits.length) {
           return Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        }

        const markup = createGallery(hits);
        addMarkup(markup)
    } catch (error) {
        console.log(error)
    }
    
}

function createGallery(items = []) {
    return items.map(({webformatURL,largeImageURL, tags, likes, views, comments, downloads}) => {
        return `<a href='${largeImageURL}'>
     <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${downloads}
    </p>
  </div>
</div></a>
     `
    }).join('')
 }


function addMarkup(markup = '') {
    galleryEl.insertAdjacentHTML('beforeend', markup)
}