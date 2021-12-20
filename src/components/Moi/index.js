import React from 'react';
// import PropTypes from 'prop-types';

import './moi.scss';

export default function Moi() {
  return (
    <div className="moi">
      <div className="moi__photo photoDiv">
        <div className="moi__photo__pictureMe" />
      </div>
      <div className="moi__hello helloDiv">
        <p className="moi__hello__text">Hello,</p>
      </div>
      <div className="moi__description descDiv">
        <p className="moi__description__text">Je suis <strong>Giovanni Brugnoni</strong>
          , Développeur Web & Mobile, passionné
          par les nouvelles technologies et leurs facultés à améliorer
          la productivité des entreprises.
        </p>
      </div>
      <div className="moi__nom nomDiv">
        <p className="moi__nom__text"><strong>NOM:</strong> Giovanni Brugnoni</p>
      </div>
      <div className="moi__job jobDiv">
        <p className="moi__job__text"><strong>JOB:</strong> Développeur Web & Mobile</p>
      </div>
      <div className="moi__age ageDiv">
        <p className="moi__age__text"><strong>AGE:</strong> 32 Ans</p>
      </div>
      <div className="moi__ville villeDiv">
        <p className="moi__ville__text"><strong>VILLE:</strong> Métropole Lilloise</p>
      </div>
      <div className="moi__cv cvDiv">
        <a
          className="moi__cv__lien"
          href="https://drive.google.com/file/d/1fxWYnOnN0ts2mgqdibNCdpTvqRjocAKp/view?usp=sharing"
        >
          Voir mon CV
        </a>
      </div>
    </div>
  );
}

// Moi.propTypes = {

// };
