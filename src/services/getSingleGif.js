const API_KEY=import.meta.env.VITE_API_KEY

export default function getSingleGif( {id} ) {
    const API_URL = `api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
    
    return fetch(API_URL)
        .then(res => res.json())
        .then(response => {
         const {data} = response;
         const {images, title, id} = data;
         const {url} = images.downsized_medium;
         return {title, id, url}
    })
}
