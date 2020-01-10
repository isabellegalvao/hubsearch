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

    await api
      .get(`/users/${newUser}`)
      .then(() => {
        this.setState({ loading: true });
        history.push(`/${newUser}`);
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
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
