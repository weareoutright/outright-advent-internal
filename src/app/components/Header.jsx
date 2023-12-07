'use client'

import React from 'react'
import Nav from './Nav'
import Marquee from 'react-fast-marquee'
import Snowfall from "react-snowfall"
import { MARQUEE_MSGS } from '../constants/marqueeMsgs'
import useWindowSize from '../helperFuncs/useWindowSize'

const Header = () => {
    const now = new Date(Date.now()).valueOf()
    const endOfAdvent = new Date("12/22/2023, 9:00:00 AM").valueOf()
    const snowStart = new Date("12/4/2023, 12:00:00 AM").valueOf()
    const {width} = useWindowSize();

  return (
    <div className='Header'>
        {now >= snowStart ? <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={width <= 400 ? 250 : 1000}
        color="white"
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