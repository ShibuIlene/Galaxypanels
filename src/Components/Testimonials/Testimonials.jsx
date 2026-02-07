import React,{useRef}from 'react'
import './Testimonials.css'
import nextBtn from '../../assets/next-icon.png'
import prevBtn from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'



export const Testimonials = () => {

    const slider = useRef()
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
    }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
  const slideBackward = () => {
        if(tx < 0){
            tx += 25;
    }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    return (
        <div className="testimonials">
            <img src={nextBtn} alt="Next" className='next-icon' onClick={slideForward} />
            <img src={prevBtn} alt="Previous" className='back-icon' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider} >
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="User" className='user-image' />
                                <div className="user-details">
                                    <h3 className='user-name'>John Doe 1</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, soluta.</p></div>
                            </div>
                        </div>
                    </li>
                     <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="User" className='user-image' />
                                <div className="user-details">
                                    <h3 className='user-name'>John Doe 2</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, soluta.</p></div>
                            </div>
                        </div>
                    </li>
                     <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="User" className='user-image' />
                                <div className="user-details">
                                    <h3 className='user-name'>John Doe 3</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, soluta.</p></div>
                            </div>
                        </div>
                    </li>
                     <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="User" className='user-image' />
                                <div className="user-details">
                                    <h3 className='user-name'>John Doe 4</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, soluta.</p></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
