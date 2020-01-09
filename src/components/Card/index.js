import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  CardWrapper,
  CardStars,
  CardStarsNumber,
  CardTitle,
  CardTechnologie,
  CardLink,
} from './style';

const Card = ({ className, owner, stars, title, tech }) => {
  return (
    <>
      <CardWrapper className={className}>
        <CardStars>
          <CardStarsNumber>{stars}</CardStarsNumber> Stars
        </CardStars>

        <CardTitle>{title}</CardTitle>

        <CardTechnologie>{tech}</CardTechnologie>

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
