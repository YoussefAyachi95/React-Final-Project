import {useState, useEffect} from 'react'
import getSingleGif from '../services/getSingleGif';
import { useGifs } from "./useGifs";

export default function useSingleGif ({id}) {
    const {gifs} = useGifs();
    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(function () {
        if (!gif) {
          setIsLoading(true)
          // Call the service if we dont have a gif
          getSingleGif({ id })
            .then(gif => {
              setGif(gif)
              setIsLoading(false)
              setIsError(false)
            }).catch(e => {
              setIsLoading(false)
              setIsError(true)
            })
        }
      }, [gif, id])

    return {gif, isLoading, isError}
}