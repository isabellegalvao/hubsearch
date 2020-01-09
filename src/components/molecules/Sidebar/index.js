import React from 'react';
import PropTypes from 'prop-types';

import Topic from '../../atoms/Topic';

import {
  SidebarWrapper,
  SidebarImage,
  SidebarName,
  SidebarDescription,
} from './style';

const Sidebar = ({ name, avatar, description, followers, following }) => {
  return (
    <>
      <SidebarWrapper>
        <SidebarImage src={avatar} />

        <SidebarName>{name}</SidebarName>

        <SidebarDescription>{description}</SidebarDescription>

        <Topic className="topic" item={followers} text="Followers" />
        <Topic className="topic" item={following} text="Following" />
      </SidebarWrapper>
    </>
  );
};

Sidebar.defaultProps = {
  name: '',
  description: '',
};

Sidebar.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};

export default Sidebar;
