import React from 'react'
import './Features.css'
import feature1 from '../../assets/features_1.jpg'

export const Features = () => {
  return (
    <div className='features'>
        <div className="feature" >
            <img src={feature1} alt="" />
            <div className="caption">
                <h3>Innovative Design</h3>
                <p>Experience cutting-edge technology with our sleek and modern solar panels.</p>
            </div>
        </div>
        <div className="feature">
            <img src={feature1} alt="" />
            <div className="caption">
                <h3>High Efficiency</h3>
                <p>Maximize your energy output with our state-of-the-art photovoltaic cells.</p>
            </div>
        </div>
        <div className="feature">
            <img src={feature1} alt="" />
            <div className="caption">
                <h3>Durability</h3>
                <p>Built to withstand the harshest weather conditions, ensuring long-lasting performance.</p>
            </div>
        </div>
    </div>
  )
}
