import React from 'react'
import './Gallery.css'
import img1 from '../../assets/gallery-1.jpg'

export const Gallery = () => {
  return (
    <div className="gallery">
        <div className="gallery-item">
            <img src={img1} alt="Gallery Item 1" />
            <img src={img1} alt="Gallery Item 1" />
            <img src={img1} alt="Gallery Item 1" />
            <img src={img1} alt="Gallery Item 1" />            
        </div>
        <button className='btn dark-btn'>See More</button>
    </div>
  )
}
