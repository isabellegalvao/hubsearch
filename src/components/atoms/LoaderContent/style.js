import styled from 'styled-components';
import { DEVICE } from '../../../styles/theme';

export const LoaderContentWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  padding: 0 40px;

  svg {
    width: 100%;
    height: 300px;
  }

  @media ${DEVICE.tablet_max} {
    height: auto;
    padding: 0 20px;
  }
`;
