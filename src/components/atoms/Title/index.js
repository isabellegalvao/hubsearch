import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './style';

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
