import React from 'react';

import Card from '../../components/Card';

import { RepositoryWrapper, Title } from './style';

const Repository = () => {
  return (
    <>
      <RepositoryWrapper>
        <Title>gitstar</Title>
        <Card />
      </RepositoryWrapper>
    </>
  );
};

export default Repository;
