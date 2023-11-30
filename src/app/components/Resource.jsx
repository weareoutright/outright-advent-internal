import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const today = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})

  return (
        <Link className={`div${id} box ${orientation} ${today >= releaseDate ? "active" : "covered"}`} href={href} target='_blank' rel='noreferrer' alt={`link to ${title}`}style={today >= releaseDate ? {} : {"border": "1px solid #fff"}}>
          <span>{id-1}</span>
        </Link>
  )
}

export default Resource