import styled from 'styled-components';
import { GREY_DARK, PRIMARY_COLOR, SIZES } from '../../../styles/theme';

export const StyledTextLink = styled.a`
  border-bottom: 2px dotted currentColor;
  color: ${PRIMARY_COLOR};
  font-size: ${SIZES.sm};
  font-weight: 700;

  &:hover {
    color: ${GREY_DARK};
  }
`;
