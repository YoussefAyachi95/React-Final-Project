import React, {useState} from 'react'
import { useLocation } from "wouter"

import './SearchForm.scss'

const RATINGS = ["g", "pg", "pg-13", "r"]

export default function SearchForm({initialKeyword = '', initialRating = 'g'}) {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [rating, setRating] = useState(initialRating)
    const [, pushLocation] = useLocation()


  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleChangeRating = (e) => {
    setRating(e.target.value)
  }

  return (
    <>
        <form onSubmit={handleSubmit} className='search-form'>
            <input type="text" placeholder='Search a gif...' onChange={handleChange} value={keyword} />
            <button className='search-btn'>Search</button>
            <select className='select-option' onChange={handleChangeRating} value={rating}>
                <option disabled>Choose GIF Rating</option>
                {
                    RATINGS.map((rating) => (
                        <option key={rating}>{rating}</option>
                    ))
                }
            </select>
      </form>
    </>
  )
}
