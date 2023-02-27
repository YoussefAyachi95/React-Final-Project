import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'

import getTrending from '../../services/getTrending'

import useNearScreen from '../../hooks/useNearScreen'

import './TrendingSearches.scss'

function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrending().then(setTrends);
    }, [])

  return (
    <>
        <h3 className='App-title'>Trending:</h3>
        <div className='Trending-container'>
            {
                trends.map((trend) => (
                    <Link id='Trending-link' key={trend.id} to={`/search/${trend.title}`}>{trend.title}</Link>
                ))
            }
        </div>
    </>
  )
}


// Only load/fetch the trending section when the user is in the viewport
export default function LazyTrending() {
    const {show, elementRef} = useNearScreen()

    return (
        <div ref={elementRef}>
            {show ? <TrendingSearches/> : null}
        </div>
    )
}
