'use client'

import React from 'react'
import Countdown from 'react-countdown-simple'
import { RESOURCES } from '../constants/resourceInfo'

const Nav = () => {
  const now = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})
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
    <nav className='Nav'>
      <p>✨ 🎁 </p>
      <Countdown targetDate={nextResourceReveal} renderer={renderer}/>
      <p> 🎁 ✨</p>
    </nav>
  )
}

export default Nav