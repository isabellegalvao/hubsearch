import styled from 'styled-components';
import { GREY_LIGHT, DEVICE } from '../../styles/theme';

export const ProfileWrapper = styled.div`
  background-color: ${GREY_LIGHT};
  display: flex;
  justify-content: flex-end;
  min-height: 100%;

  @media ${DEVICE.desktop_max} {
    display: block;
  }
`;

export const List = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px 0;
  width: 70%;

  .card {
    flex-basis: calc(50% - 20px);
    margin-bottom: 40px;

    &:not(:nth-child(even)) {
      margin-right: 40px;
    }

    @media ${DEVICE.tablet_max} {
      flex-basis: 100%;
      margin: 0 auto 40px;

      &:last-child {
        margin-bottom: 0;
      }

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
