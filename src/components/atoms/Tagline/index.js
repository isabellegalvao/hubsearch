import React from 'react';
import PropTypes from 'prop-types';

import { StyledTagline } from './style';

const Tagline = ({ text }) => {
  return <StyledTagline>{text}</StyledTagline>;
};

Tagline.defaultProps = {
  text: '',
};

Tagline.propTypes = {
  text: PropTypes.string,
};

export default Tagline;
