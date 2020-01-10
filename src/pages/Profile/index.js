import React, { Component } from 'react';

import api from '../../services/api';

import Button from '../../components/atoms/Button';
import LoaderContent from '../../components/atoms/LoaderContent';
import Sidebar from '../../components/molecules/Sidebar';
import Card from '../../components/molecules/Card';

import icon from '../../img/icon__left-arrow.svg';

import { ProfileWrapper, List } from './style';

export default class Profile extends Component {
  state = {
    user: {},
    repositories: [],
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { user },
      },
    } = this.props;

    try {
      const getUser = await api.get(`/users/${user}`);
      const { data } = getUser;
      this.setState({ user: data });

      const getRepos = await api.get(`/users/${user}/repos`);
      const { data: repositories } = getRepos;
      this.setState({ repositories });

      this.setState({ loading: false });
    } catch (error) {
      this.setState({ repositories: [] });
    }
  }

  searchNewUser = () => {
    const { history } = this.props;
    history.push(`/`);
  };

  render() {
    const { user, repositories, loading } = this.state;

    return (
      <>
        <ProfileWrapper>
          <Sidebar
            name={user.login}
            description={user.bio}
            avatar={user.avatar_url}
            following={user.following}
            followers={user.followers}
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
