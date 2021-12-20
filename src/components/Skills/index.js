import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
// import PropTypes from 'prop-types';

import './skills.scss';

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__title titleDiv">
        <h2 className="skills__title__h2">Ce que je sais faire</h2>
        <h1 className="skills__title__h1">MES COMPÉTENCES</h1>
        <p className="skills__title__p">
          Voici un aperçu de mes compétences techniques :
        </p>
      </div>
      <div className="skills__progressBar barDiv">
        <p className="skills__progressBar__text">HTML5, CSS3, JS ES6</p>
        <ProgressBar completed="90" />
        <p className="skills__progressBar__text">REACT, REDUX, AXIOS</p>
        <ProgressBar completed="80" />
        <p className="skills__progressBar__text">Node.js, Express, postgreSQL, sequelize</p>
        <ProgressBar completed="75" />
        <p className="skills__progressBar__text">Git, Sqitch</p>
        <ProgressBar completed="65" />
      </div>
      <div className="skills__picture pictureDiv">
        <div className="skills__picture__competence" />
      </div>
    </div>
  );
}

// Skills.propTypes = {

// };
