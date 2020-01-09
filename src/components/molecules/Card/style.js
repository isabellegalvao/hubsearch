import styled from 'styled-components';
import { LIGHT, PRIMARY_COLOR, SIZES, GREY_DARK } from '../../../styles/theme';

export const CardWrapper = styled.div`
  background: ${LIGHT};
  padding: 25px;
`;

export const CardLink = styled.p`
  a {
    border-bottom: 2px dotted currentColor;
    color: ${PRIMARY_COLOR};
    font-size: ${SIZES.sm};
    font-weight: 700;

    &:hover {
      color: ${GREY_DARK};
    }
  }
`;
