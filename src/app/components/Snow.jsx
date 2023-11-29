import React from 'react'
import Image from "next/image";
import SNOW from "../images/snow.svg"

const Snow = () => {
  return (
    <div className="Snow">
        <Image src={SNOW}></Image>
        <div className="extra-snow"><span></span></div>
    </div>
  )
}

export default Snow