import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Resource = ({id, title, href, orientation, releaseDate}) => {
    const today = new Date(Date.now())
    const currentDate = today.toLocaleString()

    // add logic for covered resource vs uncovered - overlay?

  return (
        <Link className={`div${id} box ${orientation}`} href={href} target='_blank' rel='noreferrer' atl={`link to ${title}`}>
        </Link>
  )
}

export default Resource