import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';
// import PropTypes from 'prop-types';

import './header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__elem name">
        <p className="header__elem__text me">Hi, I'Am </p>
        <p className="header__elem__text me__gio">
          <Typewriter
            words={[
              'Web Developer React',
              'Web Developer Full JavaScript',
              'Web Developer Full Stack',
              'Giovanni.B',
            ]}
            cursor
            cursorStyle="|"
            loop={false}
            typeSpeed={150}
          />
        </p>
      </div>
      <div className="header__elem porfolio">
        <div className="header__elem__background" />
        <p className="header__elem__text">Portfolio</p>
      </div>
      <div className="header__elem skill">
        <div className="header__elem__background" />
        <p className="header__elem__text">Compétences</p>
      </div>
      <div className="header__elem xp">
        <div className="header__elem__background" />
        <p className="header__elem__text">Expérience & Formation</p>
      </div>
      <div className="header__elem contacts">
        <div className="header__elem__background" />
        <p className="header__elem__text">Contact</p>
      </div>
    </div>
  );
}

// Header.propTypes = {

// };
