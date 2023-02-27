import React from 'react'
import { Link } from 'wouter'

import useUser from '../../hooks/useUser'

import './Header.scss'

export default function Header() {
  const { isLogged, logout } = useUser()

  const handleClick = (e) => {
    e.preventDefault()
    logout()
  }


  return (
    <div className='Main-header'>
       {
        isLogged 
        ?  <Link to='#' onClick={handleClick}>
              Logout
            </Link>
        : <Link to='/login'>
            Login
          </Link>
       }
       <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
