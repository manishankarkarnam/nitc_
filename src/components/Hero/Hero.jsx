import React from 'react'
import './Hero.css'
import DarkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='container hero'>
        <div className="context">
            <h1 className='block1h1'>We Ensure better <span className='educationSpan'>education</span> for a better World</h1>
            <p className='block1p'>Our cutting-edge curriculam is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <button className='exploreButton'>Explore more <img src={DarkArrow} alt="arrow-icon" className='darkArrowImg'/></button>
        </div>        
    </div>
  )
}

export default Hero