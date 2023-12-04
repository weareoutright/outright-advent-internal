'use client'

import React from 'react'
import Countdown from 'react-countdown-simple'
import { RESOURCES } from '../constants/resourceInfo'

const Nav = ({endOfAdvent}) => {
  const now = new Date(Date.now()).valueOf()
  const nextResource = RESOURCES.find((resource) => resource.releaseDate >= now).releaseDate
  const nextResourceReveal = new Date(nextResource)

  const renderer = ({ days, hours, minutes, seconds }) =>
  <div className="timer">
    <p>{days} days</p>
    <p>{hours} hours</p>
    <p>{minutes} mins</p>
    <p>{seconds} sec</p>
    </div>

  return (
    <>
      {
        now >= endOfAdvent ? 
        <nav className='Nav end-of-advent'>
          <p>🎁 Happy holidays and cheers to 2023! 🎉</p> 
        </nav> 
        : 
        <nav className='Nav'>
          <p>✨ 🎁  </p>
          <Countdown targetDate={nextResourceReveal} renderer={renderer}/>
          <p>  🎁 ✨</p>
        </nav>  
      }
    </>
  )
}

export default Nav