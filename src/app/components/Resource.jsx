import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Resource = ({id, title, href, resourceImg, orientation, releaseDate}) => {
    const today = new Date(Date.now())
    const currentDate = today.toLocaleString()

    // add logic for covered resource vs uncovered - overlay?
    console.log(resourceImg)

  return (
        <Link className={`div${id} box ${orientation} ${currentDate >= releaseDate ? "" : "covered"}`} href={href} target='_blank' rel='noreferrer' alt={`link to ${title}`}>
        </Link>
  )
}

export default Resource