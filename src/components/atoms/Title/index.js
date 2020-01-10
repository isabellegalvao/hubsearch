import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './style';

const Title = ({ className, text }) => {
  return <StyledTitle className={className}>{text}</StyledTitle>;
};

Title.defaultProps = {
  className: '',
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
