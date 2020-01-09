import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextLink } from './style';

const TextLink = ({ href, label }) => {
  return <StyledTextLink href={href}>{label}</StyledTextLink>;
};

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextLink;
