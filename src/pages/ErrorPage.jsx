import React from 'react'
import { Link } from "wouter";
import SearchForm from '../components/SearchForm/SearchForm';

import './styles/ErrorPage.scss'

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

export default function ErrorPage() {

    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1 ]}/giphy.gif`
      }

  return (
    <>
    <title>Error 404 | iffy</title>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className='App-error'>
            <span className='Error-message'>404</span>
            <span className='Error-span'>Sometimes getting lost isn't that bad</span>
            <img src={randomImage()} alt="alt-page-404" className='Error-image'/>
            <Link to='/' className='Error-btn'>Go back home</Link>
        </div>
      </div>
    </>
  )
}
