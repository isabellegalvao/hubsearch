import React from 'react';
import PropTypes from 'prop-types';

import { StyledTopic, StyledTopicItem } from './style';

const Topic = ({ className, item, text }) => {
  return (
    <StyledTopic className={className}>
      <StyledTopicItem> {item} </StyledTopicItem>
      {item ? <>{text}</> : ''}
    </StyledTopic>
  );
};

Topic.defaultProps = {
  className: '',
};

Topic.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Topic;
