import React from 'react';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { IoLogoReact, IoEllipsisVerticalOutline } from 'react-icons/io5';

// import PropTypes from 'prop-types';

import './presentation.scss';

export default function Presentation() {
  return (
    <div className="presentation ">
      <IoLogoReact className="presentation__react reactElement" />
      <div className="presentation__message mesDiv">
        <p className="presentation__message__text">Hi, I'Am</p>
      </div>
      <div className="presentation__name nameDiv">
        <h1 className="presentation__name__text">Giovanni.B</h1>
      </div>
      <div className="presentation__job jobDiv">
        <IoLogoReact className="presentation__job__logo" />
        <h2 className="presentation__job__text">Développeur Web & Mobile</h2>
      </div>
      <div className="presentation__link linkDiv">
        <div className="presentation__link__network">
          <a href="https://www.linkedin.com/in/giovanni-brugnoni/">
            <GrLinkedinOption className="presentation__link__network__logo" />
          </a>
        </div>
        <div className="presentation__link__network">
          <a href="https://github.com/Giovannib89">
            <GrGithub className="presentation__link__network__logo" />
          </a>
        </div>
      </div>
      <div className="presentation__zone zoneDiv">
        <div className="presentation__zone__scrollMouse mouseElem">
          <IoEllipsisVerticalOutline className="presentation__zone__scrollMouse__verticalPoint" />
        </div>
      </div>
      <div className="presentation__picture pictureDiv">
        <div className="presentation__picture__computer" />
      </div>
    </div>
  );
}

// Presentation.propTypes = {

// };
