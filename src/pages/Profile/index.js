import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';

import { ProfileWrapper, List } from './style';

export default class Profile extends Component {
  state = {
    name: '',
    bio: '',
    avatar_url: '',
    followers: '',
    following: '',
  };

  componentDidMount() {
    const { match } = this.props;
    const { location } = this.props;
    const { name, bio, avatar_url, followers, following } = location.state;

    this.setState({ name, bio, avatar_url, followers, following });
  }

  render() {
    const { name, bio, avatar_url, followers, following } = this.state;

    return (
      <>
        <ProfileWrapper>
          <Sidebar
            name={name}
            description={bio}
            avatar={avatar_url}
            following={following}
            followers={followers}
          />
          <List>
            <Card className="card" />
          </List>
        </ProfileWrapper>
      </>
    );
  }
}
