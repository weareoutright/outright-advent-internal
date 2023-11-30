import React from 'react'
import Image from "next/image";
import SNOW from "../images/snow/snow.svg"

const Snow = () => {
  return (
    <div className="Snow">
        <Image src={SNOW} alt=""></Image>
        <div className="extra-snow"><span></span></div>
    </div>
  )
}

export default Snow