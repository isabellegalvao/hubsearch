import React from 'react';
import ContentLoader from 'react-content-loader';

import { GREY, GREY_LIGHT } from '../../../styles/theme';
import { LoaderContentWrapper } from './style';

const LoaderContent = () => {
  return (
    <LoaderContentWrapper>
      <ContentLoader
        height={160}
        width={600}
        speed={2}
        primaryColor={GREY}
        secondaryColor={GREY_LIGHT}
      >
        <rect x="0" y="0" rx="0" ry="0" width="595" height="18" />
        <rect x="0" y="30" rx="0" ry="0" width="534" height="19" />
        <rect x="0" y="60" rx="0" ry="0" width="595" height="16" />
        <rect x="0" y="85" rx="0" ry="0" width="534" height="22" />
        <rect x="0" y="118" rx="0" ry="0" width="595" height="20" />
      </ContentLoader>
    </LoaderContentWrapper>
  );
};

export default LoaderContent;
