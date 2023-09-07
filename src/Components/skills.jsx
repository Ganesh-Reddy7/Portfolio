import React from 'react';
import { skill } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = () => {
  return (
    <>
      {skill.map(({title , percentage} , index) => {
        return (
          <div className="progress_box" key={index}>
            <div className="progress_circle">
              <CircularProgressbar 
              strokeWidth={7.5} 
              text={`${percentage}%`}
              value={percentage}
              />
            </div>
            <h3 className="skills_title">{title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default skills