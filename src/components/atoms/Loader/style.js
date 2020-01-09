import styled from 'styled-components';
import { PRIMARY_COLOR, GREY_LIGHT } from '../../../styles/theme';

export const StyledLoader = styled.p`
  @keyframes rotating {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  animation: rotating 0.5s 0.25s linear infinite;
  background-color: transparent;
  border-bottom-color: ${PRIMARY_COLOR};
  border-left-color: ${GREY_LIGHT};
  border-radius: 50%;
  border-right-color: ${GREY_LIGHT};
  border-style: solid;
  border-top-color: ${GREY_LIGHT};
  border-width: 3px;
  cursor: wait;
  display: block;
  font-size: 0;
  height: 30px;
  width: 30px;
`;
