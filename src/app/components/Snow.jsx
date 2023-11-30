'use client'

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import SNOW from "../images/snow/snow.svg"

const Snow = () => {

const [snowHeight, setSnowHeight] = useState(5)

// useEffect(() => {
//   const interval = setInterval(() => {
//     setSnowHeight(snowHeight + 1);
//   }, 86400000);

//   return () => clearInterval(interval);
// });

  return (
    <div className="Snow">
        <Image src={SNOW} alt=""></Image>
        <div className="extra-snow" style={{height:`${snowHeight}em`}}><span></span></div>
    </div>
  )
}

export default Snow