import React from 'react'
import './hero-header.css'

const HeroHeader = () => {
  return (
    <div className="hero-header">
        <div className="search-box">
            <div className="input-wrapper">
                <i className="bi bi-search"></i>
                <input className='search-box-input' type="search" placeholder='Search Your Next Trippe  ' />
            </div>
            <button className="search-box-btn">GO</button>
        </div>
        <div className="hero-header-title">
            <h2>GO</h2>
            <h1>Dubaí</h1>
        </div>

    </div>
  
  )
}

export default HeroHeader
