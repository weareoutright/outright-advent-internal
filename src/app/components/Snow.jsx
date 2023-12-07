'use client'

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import SNOW from "../images/snow/snow.svg"
import SNOW_MID from "../images/snow/snow-mid.svg"
import SNOW_BACK from "../images/snow/snow-back.svg"

const Snow = () => {
  const [snowHeight, setSnowHeight] = useState(7)
  const now = new Date(Date.now).valueOf();

  if (now >= new Date('12/11/2023 12:01:00 AM') && now <= new Date("12/18/2023 12:01:00 AM")) setSnowHeight(11)
  if (now >= new Date('12/18/2023 12:01:00 AM')) setSnowHeight(25)

  return (
    <div className="Snow">
        {snowHeight >=15 ? <Image className="snow-back" src={SNOW_BACK} alt=""/> : ""}
        {snowHeight >=11 ? <Image className="snow-mid" src={SNOW_MID} alt=""/> : ""}
        <Image className="snow-front" src={SNOW} alt=""></Image>
        <div className="extra-snow" style={{height:`${snowHeight}em`}}><span></span></div>
    </div>
  )
}

export default Snow