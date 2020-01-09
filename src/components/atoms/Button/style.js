import styled from 'styled-components';
import {
  LIGHT,
  PRIMARY_FONT,
  PRIMARY_COLOR,
  SIZES,
} from '../../../styles/theme';

export const StyledButton = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: ${PRIMARY_FONT};
  height: 50px;

  .icon {
    align-items: center;
    background-color: ${LIGHT};
    display: flex;
    height: 50px;
    justify-content: center;
    min-width: 50px;

    path {
      fill: ${PRIMARY_COLOR};
    }
  }

  &:hover p {
    background: transparent;
  }
`;

export const StyledButtonText = styled.p`
  align-items: center;
  background: ${LIGHT};
  border: 4px solid ${LIGHT};
  display: flex;
  flex-shrink: 0;
  font-size: ${SIZES.xs};
  height: 50px;
  justify-content: center;
  padding: 0 20px;
  text-transform: uppercase;
  color: ${PRIMARY_COLOR};
`;
