import React from 'react'
import Image from 'next/image'
import LOGO from "../images/outright-brand.svg"

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-brand">
            <Image src={LOGO} alt=""></Image>
        </div>
    </div>
  )
}

export default Footer