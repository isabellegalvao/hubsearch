import styled from 'styled-components';
import { LIGHT, SIZES } from '../../../styles/theme';

export const UserWrapper = styled.div`
  color: ${LIGHT};

  .topic {
    color: ${LIGHT};
    margin: 15px auto;

    span {
      color: currentColor;
    }
  }
`;

export const UserImage = styled.img`
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  max-width: 200px;
  width: 80%;
`;

export const UserName = styled.h1`
  font-size: ${SIZES.xl};
  margin: 16px auto;
  word-break: break-all;
`;

export const UserDescription = styled.p`
  font-size: ${SIZES.sm};
  height: auto;
  line-height: 22px;
  max-height: 100px;
  overflow: scroll;
`;
