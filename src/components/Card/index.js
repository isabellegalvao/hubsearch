import React from 'react';
import { Link } from 'react-router-dom';

import {
  CardWrapper,
  CardStars,
  CardStarsNumber,
  CardTitle,
  CardTechnologie,
  CardLink,
} from './style';

const Card = () => {
  return (
    <>
      <CardWrapper>
        <CardStars>
          <CardStarsNumber>0</CardStarsNumber> Stars
        </CardStars>

        <CardTitle>Gitstar</CardTitle>

        <CardTechnologie>CSS</CardTechnologie>

        <CardLink>
          <Link to={`/`} activeClassName="current">
            SEE DETAILS
          </Link>
        </CardLink>
      </CardWrapper>
    </>
  );
};

export default Card;
