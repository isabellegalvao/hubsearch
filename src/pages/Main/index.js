import React, { Component } from 'react';

import api from '../../services/api';

import {
  MainWrapper,
  MainContent,
  MainTitle,
  MainSubtitle,
  MainForm,
  MainFormInput,
  MainFormButton,
} from './style';

import arrowIcon from '../../img/icon__right-arrow.svg';

export default class Main extends Component {
  state = {
    newUser: '',
  };

  handleInputChange = e => {
    this.setState({ newUser: e.target.value });
  };

  searchUser = async e => {
    e.preventDefault();

    const { newUser } = this.state;
    const { history } = this.props;

    const response = await api.get(`/users/${newUser}`);

    const { name, bio, followers, following, avatar_url } = response.data;

    history.push(`/profile/${newUser}`, {
      name,
      bio,
      followers,
      following,
      avatar_url,
    });
  };

  render() {
    const { newUser } = this.state;

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
          </MainContent>
        </MainWrapper>
      </>
    );
  }
}
