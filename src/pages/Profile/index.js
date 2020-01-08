import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

import { ProfileWrapper, List } from './style';

export default class Profile extends Component {
  state = {};

  async componentDidMount() {
    const { match } = this.props;

    const userName = match.params.user;

    console.log(userName);
  }

  render() {
    return (
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
  }
}
