import React from 'react'
import {Redirect} from 'wouter'
import {RotatingLines} from 'react-loader-spinner'

import Gif from '../components/Gif/Gif';

import useSingleGif from '../hooks/useSingleGif';
import useTitle from '../hooks/useTitle';

import './styles/Detail.scss'

export default function Detail({params}) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : '';

  useTitle({title: title})

  if (isLoading) {
    return (
        <div className='spinner-container'>
            <RotatingLines 
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
              className='spinner'
          />
        </div>
    )
  }

  if (isError) return <Redirect to='/404' />
  if (!gif) return null


  return (<Gif {...gif}/>)
}
