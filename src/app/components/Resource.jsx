import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const today = new Date(Date.now()).toLocaleString('en-us', {timeZone: 'America/New_York'})

    // add logic for covered resource vs uncovered - overlay?
  return (
        <Link className={`div${id} box ${orientation} ${today >= releaseDate ? "" : "covered"}`} href={href} target='_blank' rel='noreferrer' alt={`link to ${title}`}>
        </Link>
  )
}

export default Resource