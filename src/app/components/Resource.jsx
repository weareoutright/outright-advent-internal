'use client'

import Link from 'next/link'
import React from 'react'
import { CLICK_ALERTS } from '../constants/clickAlerts'

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const today = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})
    const makeActive = today >= releaseDate;

    const getAlert = () => {
      alert(CLICK_ALERTS[Math.floor(Math.random() * CLICK_ALERTS.length)]);
      return false;
    }

  return (
        <Link 
        className={`div${id} box ${orientation} ${makeActive ? "active" : "covered"}`}
        href={makeActive ? href : ""} 
        alt={`link to ${title}`}
        style={makeActive ? {} : {"border": "1px solid #fff"}} 
        aria-disabled={makeActive ? false : true} 
        onClick={() => {
          getAlert();
          event.preventDefault()
          return false;
        }}
        >
          <span>{id-1}</span>
        </Link>
  )
}

export default Resource