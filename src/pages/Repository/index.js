import React, { Component } from 'react';
import { motion } from 'framer-motion';

import api from '../../services/api';

import Button from '../../components/atoms/Button';
import Topic from '../../components/atoms/Topic';
import Tagline from '../../components/atoms/Tagline';
import TextLink from '../../components/atoms/TextLink';
import LoaderContent from '../../components/atoms/LoaderContent';

import icon from '../../img/icon__left-arrow.svg';

import { RepositoryWrapper, RepositoryTitle, RepositoryContent } from './style';

export default class Repository extends Component {
  state = {
    currentRepo: {},
    repoExists: true,
    loading: true,
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
      this.setState({ currentRepo, loading: false });
    } catch (error) {
      this.setState({ repoExists: false });
    }
  }

  gobackToProfile = () => {
    const {
      match: {
        params: { owner },
      },
    } = this.props;

    const { history } = this.props;
    history.push(`/${owner}`);
  };

  render() {
    const { currentRepo, repoExists, loading } = this.state;

    const variants = {
      hidden: { opacity: 0, y: '100px' },
      visible: { opacity: 1, y: '0' },
    };

    return (
      <>
        <RepositoryWrapper>
          <Button
            onClick={this.gobackToProfile}
            className="button"
            icon={icon}
            text="Back to list"
          />
          {repoExists ? (
            <>
              {loading ? (
                <LoaderContent className="loader" />
              ) : (
                <>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5 }}
                  >
                    <RepositoryTitle>{currentRepo.name}</RepositoryTitle>
                    <RepositoryContent>
                      <Topic
                        className="topic"
                        item={currentRepo.stargazers_count}
                        text="Stars"
                      />

                      {currentRepo.language && (
                        <Tagline text={currentRepo.language} />
                      )}

                      {currentRepo.description && (
                        <Tagline text={currentRepo.description} />
                      )}

                      <TextLink
                        href={`https://github.com/${currentRepo.full_name}`}
                        label="SEE ON GITHUB"
                      />
                    </RepositoryContent>
                  </motion.div>
                </>
              )}
            </>
          ) : (
            <>
              <RepositoryTitle>
                This repository does not exists.
              </RepositoryTitle>
            </>
          )}
        </RepositoryWrapper>
      </>
    );
  }
}
