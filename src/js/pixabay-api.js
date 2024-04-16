import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43233775-39d154ba994f40051e2e1ec64';

export async function objectSearch(text, page) {
  const response = await axios(BASE_URL, {
    params: {
      key: KEY,
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
