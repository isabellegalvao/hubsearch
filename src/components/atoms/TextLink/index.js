import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextLink } from './style';

const TextLink = ({ href, label, target }) => {
  return (
    <StyledTextLink href={href} target={target}>
      {label}
    </StyledTextLink>
  );
};

TextLink.defaultProps = {
  target: '_blank',
};

TextLink.propTypes = {
  target: PropTypes.string,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextLink;
