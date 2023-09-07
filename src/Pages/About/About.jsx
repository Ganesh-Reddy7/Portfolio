import React from 'react';
import Info from '../../Components/Info';
import Stats from '../../Components/Stats';
import Skills from '../../Components/skills';
import {FaDownload} from 'react-icons/fa';
import Resume from "../../assets/Resume2208.pdf";
import './About.css'
import ResumeItem from '../../Components/ResumeItem';
import { resume1 } from '../../data';


const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">About <span>Me</span></h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Person Information</h3>

            <ul className="info_list grid">
              <Info />
            </ul>

            <a href={Resume} download='' className="button">Download Resume<span className='button_icon'>< FaDownload/> </span></a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <section className="skills">
        <h3 className="section_subtitle subtitle_center">My Skills</h3>
        <div className="skills_container grid">
          <Skills />
        </div>
      </section>

      <div className="seperator"></div>

      <section className="resume">
        <h3 className="section_subtitle subtitle_center">Experiences & Education</h3>

        <div className="resume_container grid">
          <div className="resume_data">
            {resume1.map((val) =>{
              if(val.category === 'experience'){
                return <ResumeItem key={val.id} {...val} />;
              }
              return null;
            })}
          </div>
          
          <div className="resume_data">
            {resume1.map((val) =>{
              if(val.category === 'education'){
                return <ResumeItem key={val.id} {...val} />;
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About