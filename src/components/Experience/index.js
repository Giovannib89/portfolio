import React from 'react';
import { Chrono } from 'react-chrono';
// import PropTypes from 'prop-types';

import data from 'src/assets/exp';
import './experience.scss';

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience__title expDiv">
        <h1 className="experience__title__text">
          Expérience & Formation
        </h1>
      </div>
      <div className="experience__container chronoDiv">
        <Chrono
          items={data}
          mode="HORIZONTAL"
          useReadMore={false}
          cardHeight={100}
          theme={{
            primary: '#c72424',
            secondary: '#191919',
            titleColor: '#c72424',
            cardForeColor: 'white',
            cardBgColor: '#191919',
          }}
        >
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-glyphs/100/000000/briefcase.png"
              alt="briefcase"
            />
            <img
              src="https://img.icons8.com/glyph-neue/100/000000/graduation-cap.png"
              alt="graduation"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/100/000000/briefcase.png"
              alt="briefcase"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/100/000000/briefcase.png"
              alt="briefcase"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/100/000000/briefcase.png"
              alt="briefcase"
            />
            <img
              src="https://img.icons8.com/glyph-neue/100/000000/graduation-cap.png"
              alt="graduation"
            />
            <img
              src="https://img.icons8.com/glyph-neue/100/000000/graduation-cap.png"
              alt="graduation"
            />
            <img
              src="https://img.icons8.com/glyph-neue/100/000000/graduation-cap.png"
              alt="graduation"
            />
          </div>
        </Chrono>
      </div>
    </div>
  );
}

// Experience.propTypes = {

// };
