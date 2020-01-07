import styled from 'styled-components';
import { GREY_LIGHT, DEVICE } from '../../styles/theme';

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${DEVICE.desktop_max} {
    display: block;
  }
`;

export const List = styled.div`
  background-color: ${GREY_LIGHT};
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding: 40px 40px;
  width: 70%;

  .card {
    flex-basis: calc(50% - 20px);
    margin-bottom: 40px;

    &:not(:nth-child(even)) {
      margin-right: 40px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media ${DEVICE.tablet_max} {
      flex-basis: 100%;
      margin: 0 auto 40px;

      &:not(:nth-child(even)) {
        margin-right: 0;
      }
    }
  }

  @media ${DEVICE.desktop_max} {
    padding: 30px;
    width: 100%;
  }
`;
