import React from 'react';
import Profile from "../../assets/home1.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home_img'/>
      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Ganesh Kumar Reddy.</span>Software Developer
          </h1>

          <p className='home_description'>
          I am a person who always try to learn new technologies to keep update myself with the technologies.I
          always used to motivate myself to be in a good track to achieve what i want.I wanna improve my skill
          wherever i work. I am always try to be good with the people around me.I am good at web
          designing,python,JAVA and Database Management System.
          </p>

          <Link to='/About' className='button'>
            More About Me{' '}
            <span className="button_icon">
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
      <div className="color_block"></div>
    </section>

    
    
  );
}

export default Home