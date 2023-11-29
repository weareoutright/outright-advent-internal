import React from 'react'

const Nav = () => {
  return (
    <nav className='Nav'>
      <div className="timer">
          <p className="daysLeft">03 days</p>
          <p className="hoursLeft">04 hours</p>
          <p className="minsLeft">46 min</p>
          <p className="secondsLeft">23 sec</p>
      </div>
    </nav>
  )
}

export default Nav