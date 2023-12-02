'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CLICK_ALERTS } from '../constants/clickAlerts'
import WHITE_ARROW from "../images/resource-thumbnails/white-arrow.svg"
import DARK_ARROW from "../images/resource-thumbnails/dark-arrow.svg"

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const DARK_ARROW_DIV = [3, 7, 9, 14, 15];
    const WHITE_ARROW_DIV = [2, 4, 5, 6, 8, 10, 11, 12, 13, 16, 17];

    const getArrow = (div_id) => {
      if (DARK_ARROW_DIV.includes(div_id)) return DARK_ARROW;
      if (WHITE_ARROW_DIV.includes(div_id)) return WHITE_ARROW;
    }

    const getNumColor = (div_id) => {
      if (DARK_ARROW_DIV.includes(div_id)) return "dark-num";
      if (WHITE_ARROW_DIV.includes(div_id)) return "light-num";
    }

    const today = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})
    const makeActive = today >= releaseDate;

    const getAlert = (e) => {
      e.preventDefault();
      alert(CLICK_ALERTS[Math.floor(Math.random() * CLICK_ALERTS.length)]);
      return false;
    }

  return (
        <Link 
        className={`div${id} box ${orientation} ${makeActive ? "active" : "covered"}`}
        href={makeActive ? href : ""} 
        target='_blank'
        rel="noreferrer"
        alt={`link to ${title}`}
        style={makeActive ? {} : {"border": "1px solid #fff"}} 
        aria-disabled={makeActive ? false : true} 
        onClick={makeActive ? console.log("This resource is active") : (e) => {
          getAlert(e);return false;
        }}
        >
          <span className={getNumColor(id)}>{id-1}</span>
          {makeActive ? <Image src={getArrow(id)} alt=""/> : ""}
        </Link>
  )
}

export default Resource