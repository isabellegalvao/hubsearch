import React from 'react';

import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

import { ProfileWrapper, List } from './style';

const Profile = () => (
  <>
    <ProfileWrapper>
      <Sidebar />
      <List>
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
      </List>
    </ProfileWrapper>
  </>
);

export default Profile;
