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

    const response = await api.get(`/users/${newUser}`);

    console.log(response.data);
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
