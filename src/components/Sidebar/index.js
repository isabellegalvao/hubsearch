import React from 'react';
import PropTypes from 'prop-types';

import {
  SidebarWrapper,
  SidebarImage,
  SidebarName,
  SidebarDescription,
  SidebarItem,
  SidebarItemNumber,
} from './style';

const Sidebar = ({ name, avatar, description, followers, following }) => {
  return (
    <>
      <SidebarWrapper>
        <SidebarImage src={avatar} />

        <SidebarName>{name}</SidebarName>

        <SidebarDescription>{description}</SidebarDescription>

        <SidebarItem>
          <SidebarItemNumber>{followers}</SidebarItemNumber> Followers
        </SidebarItem>

        <SidebarItem>
          <SidebarItemNumber>{following}</SidebarItemNumber> Following
        </SidebarItem>
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
