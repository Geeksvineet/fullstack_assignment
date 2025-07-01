import React from 'react';
import './RealtorPage.css';
import profileImage1 from '../assets/profile1.svg'; // Replace with actual paths
import profileImage2 from '../assets/profile2.svg';
import profileImage3 from '../assets/profile3.svg';
import paintbrush from '../assets/paintbrush-2.svg';
import home from '../assets/home.svg';
import group from '../assets/Group.svg';
import dollar from '../assets/circle-dollar-sign.svg';
import groupsemi from '../assets/groupsemi.svg';
import circle from '../assets/circle.svg';
import semibig from '../assets/semibig.svg';
import orange from '../assets/orange.svg';
import bluesmall from '../assets/bluesmall.svg';
import bluelarge from '../assets/bluelarge.svg';

const RealtorPage = () => {
  return (
    <div className="realtor-page">
        <img src={circle} className='circle'/>
        <img src={semibig} className='semibig'/>
      <div className="content-section">
        <div className="text-content">
          <h2>Not Your Average Realtor</h2>
          <p>
            Work with an expert. Our team specializes in helping people find their dream homes.
            Get in touch to see how we can make your dream a reality.
          </p>
        </div>

        <div className="image-content">
          <div className="profile large">
            <img src={profileImage2} alt="Realtor" />
          </div>
          <div className="profile small">
            <img src={profileImage1} alt="Couple" />
          </div>
          <div className="profile medium">
            <img src={profileImage3} alt="Presentation" />
          </div>
          <div className="circle" id="circle-blue"></div>
          <div className="circle" id="circle-orange"></div>
          <div className="circle" id="circle-small-blue"></div>
        </div>
      </div>
      <img src={group} className='group'/>
      <img src={groupsemi} className='groupsemi'/>
      <img src={bluesmall} className='bluesmall'/>
      <img src={orange} className='orange'/>
      <img src={bluelarge} className='bluelarge'/>
      <div className="why-choose-us">
        <h3>Why Choose Us?</h3>
        <div className="features">
          <div className="feature">
          <img src={home} />
            <h4>Potential ROI</h4>
            <p>Helping you find investments with high returns.Helping you find investments with high returns.</p>
          </div>
          <div className="feature">
            <img src={paintbrush} />
            <h4>Design</h4>
            <p>Professional interior and exterior design advice.Helping you find investments with high returns.</p>
          </div>
          <div className="feature">
          <img src={dollar} />
            <h4>Marketing</h4>
            <p>Top-notch marketing strategies to sell your home quickly.Helping you find investments with high returns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtorPage;
