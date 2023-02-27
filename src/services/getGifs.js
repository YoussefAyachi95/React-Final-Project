const API_KEY=import.meta.env.VITE_API_KEY

export default function getGifs( {limit = 25, keyword = 'morty', page = 0, rating = 'g'} = {} ) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`
    
    return fetch(API_URL)
        .then(res => res.json())
        .then(response => {
         const {data} = response;
         const gifs = data.map((image) => {
          const {url} = image.images.downsized_medium;
          const {images, title, id} = image;
          return {title, id, url}
        })
         return gifs
    })
}
