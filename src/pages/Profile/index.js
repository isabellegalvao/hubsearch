import React from 'react';

import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

import { ProfileWrapper, List } from './style';

const Profile = () => {
  return (
    <>
      <ProfileWrapper>
        <Sidebar />
        <List>
          <Card className="card"></Card>
          <Card className="card"></Card>
          <Card className="card"></Card>
          <Card className="card"></Card>
          <Card className="card"></Card>
          <Card className="card"></Card>
          <Card className="card"></Card>
        </List>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
