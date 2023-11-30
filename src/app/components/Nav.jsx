'use client'

import React, {useEffect, useState} from 'react'
import Countdown from 'react-countdown-simple'

const Nav = () => {
  const COUNTDOWN_END = new Date("12/20/2023, 9:00:00 AM");

  const renderer = ({ days, hours, minutes, seconds }) =>
  <div className="timer">
    <p>{days} days</p>
    <p>{hours} hours</p>
    <p>{minutes} mins</p>
    <p>{seconds} sec</p>
    </div>

  return (
    <nav className='Nav'>
      <Countdown targetDate={COUNTDOWN_END} renderer={renderer}/>
    </nav>
  )
}

export default Nav