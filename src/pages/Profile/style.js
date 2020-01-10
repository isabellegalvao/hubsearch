import styled from 'styled-components';
import {
  PRIMARY_COLOR,
  GREY_LIGHT,
  DEVICE,
  LIGHT,
  SIZES,
} from '../../styles/theme';

export const ProfileWrapper = styled.div`
  background-color: ${GREY_LIGHT};
  display: flex;
  justify-content: flex-end;
  min-height: 100%;

  @media ${DEVICE.desktop_max} {
    display: block;
  }
`;

export const ProfileSidebar = styled.aside`
  align-content: space-between;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  left: 0;
  padding: 40px;
  position: fixed;
  top: 0;
  width: 30%;

  .title {
    color: ${LIGHT};
    font-size: ${SIZES.xl};
    text-align: left;
  }

  .button {
    margin: 30px auto 0;
    width: 100%;

    &:hover {
      p {
        color: ${LIGHT};
      }
    }

    p {
      width: calc(100% - 50px);
    }
  }

  @media ${DEVICE.desktop_max} {
    position: relative;
    width: 100%;
  }
`;

export const ProfileList = styled.div`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px 0;
  width: 70%;

  .card {
    background: ${LIGHT};
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
