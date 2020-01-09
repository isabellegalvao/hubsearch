import React, { Component } from 'react';

import api from '../../services/api';

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
    repositories: [],
  };

  async componentDidMount() {
    const {
      match: {
        params: { user },
      },
      location,
    } = this.props;

    const { name, bio, avatar_url, followers, following } = location.state;
    this.setState({ name, bio, avatar_url, followers, following });

    try {
      const getRepos = await api.get(`/users/${user}/repos`);
      const { data: repositories } = getRepos;
      this.setState({ repositories });
    } catch (error) {
      this.setState({ repositories: [] });
    }
  }

  render() {
    const {
      name,
      bio,
      avatar_url,
      followers,
      following,
      repositories,
    } = this.state;

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
            {repositories.map(repositorie => (
              <Card
                className="card"
                key={repositorie.id}
                title={repositorie.name}
                tech={repositorie.language}
                owner={repositorie.owner.login}
                stars={repositorie.stargazers_count}
              />
            ))}
          </List>
        </ProfileWrapper>
      </>
    );
  }
}
