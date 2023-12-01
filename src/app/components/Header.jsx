import React from 'react'
import Nav from './Nav'
import Marquee from 'react-fast-marquee'
import { MARQUEE_MSGS } from '../constants/marqueeMsgs'

const Header = () => {
  return (
    <div className='Header'>
        <Marquee className="Marquee" speed={65} loop={0} pauseOnHover={true} autoFill={true}>
            {MARQUEE_MSGS.map((msg, i) => {
                return <p key={i} className="marquee-msg">{msg}</p>
            })}
        </Marquee>
        <Nav />
    </div>
  )
}

export default Header