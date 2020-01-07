import styled from 'styled-components';
import {
  GREY_LIGHT,
  DEVICE,
  PRIMARY_COLOR,
  SIZES,
  LIGHT,
} from '../../styles/theme';

export const RepositoryWrapper = styled.div`
  background-color: ${GREY_LIGHT};
  height: 100%;
  padding: 40px;

  @media ${DEVICE.mobile} {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  background: ${PRIMARY_COLOR};
  color: ${LIGHT};
  font-size: ${SIZES.lg};
  padding: 20px;
  text-transform: uppercase;
`;
