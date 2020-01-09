import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

import { StyledButton, StyledButtonText } from './style';

const Button = ({ icon, text, ...props }) => {
  return (
    <>
      <StyledButton {...props}>
        <ReactSVG className="icon" src={icon} />

        <StyledButtonText>{text}</StyledButtonText>
      </StyledButton>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Button;
