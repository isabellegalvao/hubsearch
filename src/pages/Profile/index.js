import React, { Component } from 'react';

import api from '../../services/api';

import Button from '../../components/atoms/Button';
import LoaderContent from '../../components/atoms/LoaderContent';
import Sidebar from '../../components/molecules/Sidebar';
import Card from '../../components/molecules/Card';

import icon from '../../img/icon__left-arrow.svg';

import { ProfileWrapper, List, ListLoader } from './style';

export default class Profile extends Component {
  state = {
    name: '',
    bio: '',
    avatar_url: '',
    followers: '',
    following: '',
    repositories: [],
    loading: true,
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
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ repositories: [] });
    }
  }

  searchNewUser() {
    const { history } = this.props;
    history.push(`/`);
  }

  render() {
    const {
      name,
      bio,
      avatar_url,
      followers,
      following,
      repositories,
      loading,
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
          >
            <Button
              className="button"
              icon={icon}
              text="Search new user"
              onClick={() => this.searchNewUser()}
            />
          </Sidebar>

          <List>
            {loading && <LoaderContent />}

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
