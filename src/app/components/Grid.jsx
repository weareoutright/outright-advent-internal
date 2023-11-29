import Image from 'next/image'
import React from 'react'
import LOGO_ORNAMENT from "../images/logo-ornament.svg"

const Grid = () => {
  return (
    <div className="Grid">
        <div className="parent">
                <div className="div1"><Image src={LOGO_ORNAMENT}></Image></div>
                <div className="div2 box">1</div>
                <div className="div3 box">2</div>
                <div className="div4 box">3</div>
                <div className="div5 box">4</div>
                <div className="div6 box">5</div>
                <div className="div7 box">6</div>
                <div className="div8 box">7</div>
                <div className="div9 box">8</div>
                <div className="div10 box">9</div>
                <div className="div11 box">10</div>
                <div className="div12 box">11</div>
                <div className="div13 box">12</div>
                <div className="div14 box">13</div>
                <div className="div15 box">14</div>
                <div className="div16 box">15</div>
                <div className="div17 box">16</div>
        </div>
    </div>
  )
}

export default Grid