import React, { Component } from 'react';

import api from '../../services/api';

import Button from '../../components/atoms/Button';
import Topic from '../../components/atoms/Topic';
import Tagline from '../../components/atoms/Tagline';
import TextLink from '../../components/atoms/TextLink';

import icon from '../../img/icon__left-arrow.svg';

import { RepositoryWrapper, RepositoryTitle, RepositoryContent } from './style';

export default class Repository extends Component {
  state = {
    currentRepo: {},
  };

  async componentDidMount() {
    const {
      match: {
        params: { owner, repo },
      },
    } = this.props;

    try {
      const getRepository = await api.get(`/repos/${owner}/${repo}`);
      const { data: currentRepo } = getRepository;
      this.setState({ currentRepo });
    } catch (error) { }
  }

  render() {
    const { currentRepo } = this.state;
    const { history } = this.props;

    return (
      <>
        <RepositoryWrapper>
          <Button
            onClick={history.goBack}
            className="button"
            icon={icon}
            text="Back to list"
          />
          <RepositoryTitle>{currentRepo.name}</RepositoryTitle>
          <RepositoryContent>
            <Topic
              className="topic"
              item={currentRepo.stargazers_count}
              text="Stars"
            />

            {currentRepo.language && <Tagline text={currentRepo.language} />}

            {currentRepo.description && (
              <Tagline text={currentRepo.description} />
            )}

            <TextLink
              href={`https://github.com/${currentRepo.full_name}`}
              label="SEE ON GITHUB"
            />
          </RepositoryContent>
        </RepositoryWrapper>
      </>
    );
  }
}
