import React from 'react'
import Nav from './Nav'
import Marquee from 'react-fast-marquee'
import { MARQUEE_MSGS } from '../constants/marqueeMsgs'

const Header = () => {
    const now = new Date(Date.now()).valueOf()
    const endOfAdvent = "12/22/2023, 9:00:00 AM"

  return (
    <div className='Header'>
        <Marquee className={`Marquee ${now >= new Date(endOfAdvent).valueOf() ? "end-of-advent-marquee" : ""}`} speed={65} loop={0} pauseOnHover={true} autoFill={true}>
            {MARQUEE_MSGS.map((msg, i) => {
                return <p key={i} className="marquee-msg">{msg}</p>
            })}
        </Marquee>
        <Nav endOfAdvent={endOfAdvent}/>
    </div>
  )
}

export default Header