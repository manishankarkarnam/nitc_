import React, { useRef } from 'react';
import User1 from '../../assets/user-1.png';
import User2 from '../../assets/user-2.png';
import User3 from '../../assets/user-3.png';
import User4 from '../../assets/user-4.png';
import BackIcon from '../../assets/back-icon.png';
import NextIcon from '../../assets/next-icon.png';
import './Testimonials.css';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -500, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  return (
    <div className='testimonials'>
      <img src={BackIcon} alt="BackIcon" className='backBtn' onClick={() => scroll('left')} />
      <div className='scroll-container' ref={scrollRef}>
        <ul>
          <li>
            <div className='testimonialProfile'>
              <img src={User1} alt="user1" className='profilePhoto' />
              <div className='profileName'>
                <h3>William Jackson 1</h3>
                <h4>Educity, USA</h4>
              </div>
            </div>
            <div className='testimonialAbout'>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions
                I've ever made. The supportive community, state-of-the-art facilities,
                and commitment to academic excellence have truly exceeded my
                expectations.</p>
            </div>
          </li>
          <li>
            <div className='testimonialProfile'>
              <img src={User2} alt="user2" className='profilePhoto' />
              <div className='profileName'>
                <h3>William Jackson 2</h3>
                <h4>Educity, USA</h4>
              </div>
            </div>
            <div className='testimonialAbout'>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions
                I've ever made. The supportive community, state-of-the-art facilities,
                and commitment to academic excellence have truly exceeded my
                expectations.</p>
            </div>
          </li>
          <li>
            <div className='testimonialProfile'>
              <img src={User3} alt="user3" className='profilePhoto' />
              <div className='profileName'>
                <h3>William Jackson 3</h3>
                <h4>Educity, USA</h4>
              </div>
            </div>
            <div className='testimonialAbout'>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions
                I've ever made. The supportive community, state-of-the-art facilities,
                and commitment to academic excellence have truly exceeded my
                expectations.</p>
            </div>
          </li>
          <li>
            <div className='testimonialProfile'>
              <img src={User4} alt="user4" className='profilePhoto' />
              <div className='profileName'>
                <h3>William Jackson 4</h3>
                <h4>Educity, USA</h4>
              </div>
            </div>
            <div className='testimonialAbout'>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions
                I've ever made. The supportive community, state-of-the-art facilities,
                and commitment to academic excellence have truly exceeded my
                expectations.</p>
            </div>
          </li>
        </ul>
      </div>
      <img src={NextIcon} alt="NextIcon" className='nextBtn' onClick={() => scroll('right')} />
    </div>
  );
};

export default Testimonials;
