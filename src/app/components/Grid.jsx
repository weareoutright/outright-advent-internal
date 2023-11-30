import Image from 'next/image'
import React from 'react'
import LOGO_ORNAMENT from "../images/logo-ornament.svg"
import Resource from './Resource'
import { RESOURCES } from '../constants/resourceInfo'

const Grid = () => {
  return (
    <div className="Grid">
        <div className="parent">
                <div className="div1"><Image src={LOGO_ORNAMENT} alt=""></Image></div>
                {
                    RESOURCES.map((resource) => {
                        return <Resource 
                            key={resource.title}
                            day={resource.day}
                            id={resource.id}
                            title={resource.title}
                            href={resource.href}
                            orientation={resource.orientation}
                            releaseDate={resource.releaseDate}
                        />
                    })
}
        </div>
    </div>
  )
}

export default Grid