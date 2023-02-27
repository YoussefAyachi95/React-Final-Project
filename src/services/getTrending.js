const API_KEY=import.meta.env.VITE_API_KEY

export default function getTrending() {
    const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&rating=g`
    
    return fetch(API_URL)
        .then(res => res.json())
        .then(response => {
         const {data = []} = response;
          return data
        })
}
