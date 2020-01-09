import styled from 'styled-components';
import { PRIMARY_COLOR, LIGHT, SIZES, DEVICE } from '../../../styles/theme';

export const SidebarWrapper = styled.aside`
  background-color: ${PRIMARY_COLOR};
  color: ${LIGHT};
  height: 100%;
  left: 0;
  padding: 40px;
  position: fixed;
  top: 0;
  width: 30%;

  .topic {
    color: ${LIGHT};
    margin: 15px auto;

    span {
      color: currentColor;
    }
  }

  @media ${DEVICE.desktop_max} {
    padding: 30px;
    position: relative;
    width: 100%;
  }
`;

export const SidebarImage = styled.img`
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  max-width: 200px;
  width: 80%;
`;

export const SidebarName = styled.h1`
  font-size: ${SIZES.xl};
  margin: 16px auto;
`;

export const SidebarDescription = styled.p`
  font-size: ${SIZES.sm};
  height: auto;
  line-height: 22px;
  max-height: 100px;
  overflow: scroll;
`;