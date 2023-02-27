import React from 'react'
import {RotatingLines} from 'react-loader-spinner'

import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import SearchForm from '../components/SearchForm/SearchForm'

import { useGifs } from '../hooks/useGifs'
import useTitle from '../hooks/useTitle'

import './styles/SearchResults.scss'

export default function SearchResults({params}) {
  const {keyword, rating = 'g'} = params;
  const {loading, gifs, setPage} = useGifs({keyword, rating});

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  const title = gifs ? `${gifs.length} results of ${keyword}` : ''
  useTitle({title})


  return <>
    <SearchForm className='search-form' initialKeyword={keyword} initialRating={rating} />
    {
      loading
      ? <div className='spinner-container'>
          <RotatingLines 
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            className='spinner'
          />
      </div>
        
      :   <ListOfGifs gifs={gifs} />
  }
    <button className='btn-next' onClick={handleNextPage}>Show More</button>
  </>
}
