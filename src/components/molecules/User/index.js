import React from 'react';
import PropTypes from 'prop-types';

import Topic from '../../atoms/Topic';

import { UserWrapper, UserImage, UserName, UserDescription } from './style';

const User = ({ name, avatar, description, followers, following }) => {
  return (
    <>
      <UserWrapper>
        <UserImage src={avatar} />
        <UserName>{name}</UserName>
        <UserDescription>{description}</UserDescription>

        {followers || following ? (
          <>
            <Topic className="topic" item={followers} text="Followers" />
            <Topic className="topic" item={following} text="Following" />
          </>
        ) : (
          ''
        )}
      </UserWrapper>
    </>
  );
};

User.defaultProps = {
  name: '',
  description: '',
  avatar: '',
  followers: 0,
  following: 0,
};

User.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
};

export default User;
