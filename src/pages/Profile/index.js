import React, { Component } from 'react';

import api from '../../services/api';

import Loader from '../../components/atoms/Loader';
import Button from '../../components/atoms/Button';
import Title from '../../components/atoms/Title';
import LoaderContent from '../../components/atoms/LoaderContent';
import User from '../../components/molecules/User';
import Card from '../../components/molecules/Card';

import icon from '../../img/icon__left-arrow.svg';

import { ProfileWrapper, ProfileList, ProfileSidebar } from './style';

export default class Profile extends Component {
  state = {
    user: {},
    repositories: [],
    loading: true,
    userExists: true,
    loadingUser: true,
    repositoriesExists: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { user },
      },
    } = this.props;

    await api
      .get(`/users/${user}`)
      .then(response => {
        this.setState({
          user: response.data,
          userExists: true,
          loadingUser: false,
        });
      })
      .then(() => {
        api.get(`/users/${user}/repos`).then(response => {
          const { data: repositories } = response;
          this.setState({
            repositories,
            loading: false,
          });

          if (repositories.length <= 0) {
            this.setState({ repositoriesExists: false });
          }
        });
      })
      .catch(() => {
        this.setState({
          userExists: false,
          loading: false,
          loadingUser: false,
          repositoriesExists: false,
        });
      });
  }

  searchNewUser = () => {
    const { history } = this.props;
    history.push(`/`);
  };

  render() {
    const {
      user,
      repositories,
      loading,
      userExists,
      loadingUser,
      repositoriesExists,
    } = this.state;

    return (
      <>
        <ProfileWrapper>
          <ProfileSidebar>
            {loadingUser && <Loader className="loading-user" />}

            {userExists ? (
              <>
                <User
                  name={user.login}
                  description={user.bio}
                  avatar={user.avatar_url}
                  following={user.following}
                  followers={user.followers}
                />
              </>
            ) : (
              <>
                <Title className="title" text="This user does not exists" />
              </>
            )}

            <Button
              className="button"
              icon={icon}
              text="Search new user"
              onClick={() => this.searchNewUser()}
            />
          </ProfileSidebar>

          <ProfileList>
            {loading && <LoaderContent />}

            {repositoriesExists ? (
              <>
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
              </>
            ) : (
              <>
                {userExists && (
                  <Title
                    className="title"
                    text="This user does not have repositories (at least public ones)"
                  />
                )}
              </>
            )}
          </ProfileList>
        </ProfileWrapper>
      </>
    );
  }
}
