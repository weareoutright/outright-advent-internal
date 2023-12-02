'use client'

import React from 'react'
import Nav from './Nav'
import Marquee from 'react-fast-marquee'
import Snowfall from "react-snowfall"
import { MARQUEE_MSGS } from '../constants/marqueeMsgs'

const Header = () => {
    const now = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})
    const endOfAdvent = "12/22/2023, 9:00:00 AM"
    const snowStart = "12/11/2023, 12:00:00 AM"

  return (
    <div className='Header'>
        {now >= snowStart ? <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          color: "#fff"
        }}
      /> : null}
        <Marquee className={`Marquee ${now >= endOfAdvent ? "end-of-advent-marquee" : ""}`} speed={65} loop={0} pauseOnHover={true} autoFill={true}>
            {MARQUEE_MSGS.map((msg, i) => {
                return <p key={i} className="marquee-msg">{msg}</p>
            })}
        </Marquee>
        <Nav endOfAdvent={endOfAdvent}/>
    </div>
  )
}

export default Header