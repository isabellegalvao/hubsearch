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

  .button {
    margin: 0 0 20px;
  }

  .topic {
    margin: 0 auto 20px;
  }

  .loader {
    height: 400px;
    padding: 0;

    svg {
      width: 100%;
    }
  }

  a {
    display: inline-block;
    margin: 5px auto 0;
  }

  @media ${DEVICE.mobile} {
    padding: 20px;
  }
`;

export const RepositoryTitle = styled.h1`
  background: ${PRIMARY_COLOR};
  color: ${LIGHT};
  font-size: ${SIZES.lg};
  padding: 20px;
  text-transform: uppercase;
`;

export const RepositoryContent = styled.div`
  background: ${LIGHT};
  padding: 25px;
`;
