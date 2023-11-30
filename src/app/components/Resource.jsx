import Link from 'next/link'
import React from 'react'
import { PATIENCE_URL } from '../constants/resourceInfo'

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const today = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})
    const makeActive = today >= releaseDate;

  return (
        <Link className={`div${id} box ${orientation} ${makeActive ? "active" : "covered"}`} href={makeActive ? href : ""} target='_blank' rel='noreferrer' alt={`link to ${title}`}style={makeActive ? {} : {"border": "1px solid #fff"}}>
          <span>{id-1}</span>
        </Link>
  )
}

export default Resource