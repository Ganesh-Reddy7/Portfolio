import React from 'react';
import { personalInfo } from '../data';

const Info = () => {
  return (
    <>
    {personalInfo.map(({title , description}, index) => {
        return (
            <li className='info_item' key = {index}>
                <span className='info_title'>{title}</span>
                <span className="info_description">{description}</span>
            </li>
        );
    })}
    </>
  );
};

export default Info;