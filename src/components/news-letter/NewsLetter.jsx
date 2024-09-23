import React from 'react'
import './news-letter.css'
import NewsLetterImage from "../../images/dubai-7.jpg"

const NewsLetter = () => {
  return ( <div className="news-letter">
    <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
            <img src={NewsLetterImage} alt="News-Letter-Image" className='news-letter-image' />
        </div>
        <div className="news-letter-content">
            <h2 className="news-letter-content-title">
              Your Itinerary is waiting               
            </h2>
            <p className="news-letter-content-desc">
              Receive a curated list of the best travel deals and inspiration

            </p>
            <div className="news-letter-inputs">
                <input type="text" placeholder="Enter your email" className="news-letter-input" />
                <button className="news-letter-btn">
                  Sign Up
                  </button>
            </div>
        </div>
    </div>
  </div>

  )
}

export default NewsLetter
