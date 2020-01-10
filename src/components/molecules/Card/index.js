import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Title from '../../atoms/Title';
import Tagline from '../../atoms/Tagline';
import Topic from '../../atoms/Topic';

import { CardWrapper, CardLink } from './style';

const Card = ({ className, owner, stars, title, tech }) => {
  const variants = {
    hidden: { opacity: 0, y: '100px' },
    visible: { opacity: 1, y: '0' },
  };

  return (
    <>
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <CardWrapper>
          <Topic item={stars} text="Stars" />
          <Title text={title} />
          <Tagline text={tech} />
          <CardLink>
            <Link to={{ pathname: `/${owner}/${title}` }}>SEE DETAILS</Link>
          </CardLink>
        </CardWrapper>
      </motion.div>
    </>
  );
};

Card.defaultProps = {
  className: '',
  tech: '',
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  tech: PropTypes.string,
  stars: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Card;
