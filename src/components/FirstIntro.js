import React from 'react'
import "./CSS/FirstIntro.css"

function FirstIntro() {
  return (
    <>
    <div className="main-intro">
        <div className="intro-text">
            <div className="intro-what">
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="intro-purpose">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="intro-summary">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius excepturi accusamus expedita quisquam iure! In, consectetur.</p>
            </div>
            <div className="intro-button">
                <button>See Our Blogs</button>
            </div>
        </div>
        <div className="intro-img">
            <img src="./intro.jpeg" alt="" />
        </div>
    </div>
    </>
  )
}

export default FirstIntro;