'use client'

import Link from 'next/link'
import React from 'react'
import { CLICK_ALERTS } from '../constants/clickAlerts'

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const today = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})
    const makeActive = today >= releaseDate;

  return (
        <Link 
        className={`div${id} box ${orientation} ${makeActive ? "active" : "covered"}`}
        href={makeActive ? href : "javascript:void(0)"} 
        alt={`link to ${title}`}
        style={makeActive ? {} : {"border": "1px solid #fff"}} 
        aria-disabled={makeActive ? false : true} 
        onClick={() => alert(CLICK_ALERTS[Math.floor(Math.random() * CLICK_ALERTS.length)])}
        >
          <span>{id-1}</span>
        </Link>
  )
}

export default Resource