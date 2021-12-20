import React from 'react';
import PropTypes from 'prop-types';

import './progressBar.scss';

export default function ProgressBar({
  completed,
}) {
  const fillerStyles = {
    width: `${completed}%`,
  };
  return (
    <div className="progressBar">
      <div className="progressBar__bar" style={fillerStyles}>
        <span className="progressBar__bar__span">{`${completed}%`}</span>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
};
