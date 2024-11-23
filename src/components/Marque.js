import React from 'react'
import "./CSS/Marque.css"

export default function Marque() {
  return (
    <>
    <div className="main-marq">
        <div className="prod-name">
            <marquee behavior="" direction="right">RUDRAKSH BEADS   MALA AND ROSARIES    GEMSTONES     VASTU STORE      RUDRAKSH BEADS   MALA AND ROSARIES    GEMSTONES     VASTU STORE</marquee>
        </div>
        <div className="slogan">
            <p className="slogan">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="official">
            <marquee behavior="" direction="left">This is our official website. We are certified seller, there is no other means of communication rather than this site.</marquee>
        </div>
    </div>
    </>
  )
}
