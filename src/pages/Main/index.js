import React from 'react';

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

const Main = () => {
  return (
    <>
      <MainWrapper>
        <MainContent>
          <MainTitle>hey, welcome!</MainTitle>
          <MainSubtitle>
            Type below the GitHub username that you want to have informations.
          </MainSubtitle>

          <MainForm>
            <MainFormInput
              text="text"
              placeholder="e.g: vncsrbro"
            ></MainFormInput>
            <MainFormButton>
              <img src={arrowIcon} alt="Search" />
            </MainFormButton>
          </MainForm>
        </MainContent>
      </MainWrapper>
    </>
  );
};

export default Main;
