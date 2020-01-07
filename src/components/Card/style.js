import styled from 'styled-components';
import { LIGHT, PRIMARY_COLOR, SIZES, GREY_DARK } from '../../styles/theme';

export const CardWrapper = styled.div`
  background: ${LIGHT};
  padding: 25px;
`;

export const CardStars = styled.p`
  font-size: ${SIZES.md};
`;

export const CardStarsNumber = styled.span`
  color: ${PRIMARY_COLOR};
  font-weight: 700;
`;

export const CardTitle = styled.h2`
  font-size: ${SIZES.md};
  margin: 15px auto;
  text-transform: uppercase;
`;

export const CardTechnologie = styled.p`
  font-size: ${SIZES.xs};
  font-style: italic;
  margin: 0 auto 15px;
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
