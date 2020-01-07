import React from 'react';

import {
  SidebarWrapper,
  SidebarImage,
  SidebarName,
  SidebarDescription,
  SidebarItem,
  SidebarItemNumber,
} from './style';

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <SidebarImage src="https://avatars3.githubusercontent.com/u/30932300?v=4" />

        <SidebarName>Vinicius Ribeiro</SidebarName>

        <SidebarDescription>
          Developer with over 4 years of experience, focused on solving business
          problems and building high-performance applications.
        </SidebarDescription>

        <SidebarItem>
          <SidebarItemNumber>6</SidebarItemNumber> Followers
        </SidebarItem>

        <SidebarItem>
          <SidebarItemNumber>7</SidebarItemNumber> Following
        </SidebarItem>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
