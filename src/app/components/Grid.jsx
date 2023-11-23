import Image from 'next/image'
import React from 'react'
import OUTRIGHT_BRAND from "../images/outright-brand.svg"

const Grid = () => {
  return (
    <div className="Grid">
        <div className="parent">
            <div className="sidebar">
                <div className="sidebar-top">
                    <h1>16 Days of Outright ✨joy✨</h1>
                    <div className="timer">
                        <p className="daysLeft">03 days</p>
                        <p className="hoursLeft">04 hours</p>
                        <p className="minsLeft">46 min</p>
                        <p className="secondsLeft">23 sec</p>
                    </div>
                </div>
                <div className='sidebar-bottom'>
                    <Image src={OUTRIGHT_BRAND} alt="outright-brand-logo" />
                </div>
            </div>
                <div className="div1 box">1</div>
                <div className="div2 box">2</div>
                <div className="div3 box">3</div>
                <div className="div4 box">4</div>
                <div className="div5 box">5</div>
                <div className="div6 box">6</div>
                <div className="div7 box">7</div>
                <div className="div8 box">8</div>
                <div className="div9 box">9</div>
                <div className="div10 box">10</div>
                <div className="div11 box">11</div>
                <div className="div12 box">12</div>
                <div className="div13 box">13</div>
                <div className="div14 box">14</div>
                <div className="div15 box">15</div>
                <div className="div16 box">16</div>
        </div>
    </div>
  )
}

export default Grid