import React from 'react'
import Gallery1 from '../../assets/gallery-1.png'
import Gallery2 from '../../assets/gallery-2.png'
import Gallery3 from '../../assets/gallery-3.png'
import Gallery4 from '../../assets/gallery-4.png'
import WhiteArrow from '../../assets/white-arrow.png'
import './Gallery.css'


const Gallery = () => {
  return (
    <div className='Gallery'>
        <div className="galleryImages">
            <img src={Gallery1} alt="Gallery1" />
            <img src={Gallery2} alt="Gallery2" />
            <img src={Gallery3} alt="Gallery3" />
            <img src={Gallery4} alt="Gallery4" />
        </div>
        <div className="galleryBtn">
            <h1>See more here</h1>
            <img src={WhiteArrow} alt="WhiteArrow" />
        </div>
    </div>
  )
}

export default Gallery