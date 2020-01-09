import React, { Component } from 'react';

import api from '../../services/api';

import Loader from '../../components/atoms/Loader';

import {
  MainWrapper,
  MainContent,
  MainTitle,
  MainSubtitle,
  MainForm,
  MainFormInput,
  MainFormButton,
  MainFormValidation,
  MainFormActions,
} from './style';

import arrowIcon from '../../img/icon__right-arrow.svg';

export default class Main extends Component {
  state = {
    newUser: '',
    error: false,
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newUser: e.target.value });
  };

  searchUser = async e => {
    e.preventDefault();

    const { newUser } = this.state;
    const { history } = this.props;

    try {
      this.setState({ loading: true });

      const response = await api.get(`/users/${newUser}`);

      const { name, bio, followers, following, avatar_url } = response.data;

      history.push(`/${newUser}`, {
        name,
        bio,
        followers,
        following,
        avatar_url,
      });
    } catch (error) {
      this.setState({ error: true });
      this.setState({ loading: false });
    }
  };

  render() {
    const { newUser, error, loading } = this.state;

    return (
      <>
        <MainWrapper>
          <MainContent>
            <MainTitle>hey, welcome!</MainTitle>
            <MainSubtitle>
              Type below the GitHub username that you want to have informations.
            </MainSubtitle>

            <MainForm onSubmit={this.searchUser}>
              <MainFormInput
                text="text"
                placeholder="e.g: vncsrbro"
                value={newUser}
                onChange={this.handleInputChange}
                required
              />

              <MainFormButton>
                <img src={arrowIcon} alt="Search" />
              </MainFormButton>
            </MainForm>

            <MainFormActions>
              {error && (
                <MainFormValidation>Invalid username</MainFormValidation>
              )}
              {loading && <Loader className="loader" />}
            </MainFormActions>
          </MainContent>
        </MainWrapper>
      </>
    );
  }
}
