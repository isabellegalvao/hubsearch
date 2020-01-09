import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Title from '../../atoms/Title';
import Tagline from '../../atoms/Tagline';
import Topic from '../../atoms/Topic';

import { CardWrapper, CardLink } from './style';

const Card = ({ className, owner, stars, title, tech }) => {
  return (
    <>
      <CardWrapper className={className}>
        <Topic item={stars} text="Stars" />
        <Title text={title} />
        <Tagline text={tech} />
        <CardLink>
          <Link to={{ pathname: `/${owner}/${title}` }}>SEE DETAILS</Link>
        </CardLink>
      </CardWrapper>
    </>
  );
};

Card.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Card;
