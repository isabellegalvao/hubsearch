import styled from 'styled-components';
import {
  PRIMARY_COLOR,
  GREY_DARK,
  SIZES,
  PRIMARY_FONT,
  DEVICE,
} from '../../styles/theme';

export const MainWrapper = styled.div`
  align-items: center;
  border: 30px solid ${PRIMARY_COLOR};
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;

  @media ${DEVICE.mobile} {
    border-width: 15px;
  }
`;

export const MainContent = styled.div`
  text-align: center;
  padding: 0 60px;

  @media ${DEVICE.mobile} {
    padding: 0 20px;
  }
`;

export const MainTitle = styled.h1`
  color: ${GREY_DARK};
  font-size: ${SIZES.xl};
`;

export const MainSubtitle = styled.p`
  color: ${GREY_DARK};
  font-size: ${SIZES.md};
  margin: 20px auto;
`;

export const MainForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const MainFormInput = styled.input`
  border: 2px solid ${PRIMARY_COLOR};
  color: ${GREY_DARK};
  font-family: ${PRIMARY_FONT};
  font-size: ${SIZES.xs};
  height: 60px;
  max-width: 350px;
  padding: 0 20px;
  width: calc(100% - 60px);

  &::placeholder {
    font-style: italic;
  }
`;

export const MainFormButton = styled.button`
  background: ${PRIMARY_COLOR};
  cursor: pointer;
  width: 60px;
`;
