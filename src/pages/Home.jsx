import React from 'react'

import { useGifs } from '../hooks/useGifs'

import ListOfGifs from '../components/ListOfGifs/ListOfGifs'
import TrendingSearches from '../components/TrendingSearches/TrendingSearches'
import SearchForm from '../components/SearchForm/SearchForm'

import './styles/Home.scss'


export default function Home() {
  const {loading, gifs} = useGifs()


  return (
    <>
      <SearchForm/>
      <h3 className='App-title'>Last Search:</h3>
      <ListOfGifs gifs={gifs}/>
      <TrendingSearches/>
    </>
  )
}
