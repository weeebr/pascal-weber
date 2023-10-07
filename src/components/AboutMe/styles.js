import { theme, themeDark } from 'shared/theme';

import styled from 'styled-components';

export const Summary = styled.div`
  width: 100%;
  max-width: ${props => props.isTablet ? '450px' : '550px'};
  max-width: ${props => props.isMobile && '100%' };
  position: relative;
  display: flex;
  border-right: ${props => props.isMobile ? null : `1px solid ${theme.colors.divider}`};
  flex-direction: column;
  justify-content: center;
  height: ${props => props.isMobile ? 'auto' : '100vh'};
  text-align: center;
  align-items: center;

  &.dark {
    border-color: ${themeDark.colors.divider};

    .summary {
      .job-title {
        color: ${themeDark.colors.text.main};
      }

      .email .toast {
        color: ${themeDark.colors.text.success};
        background: ${themeDark.colors.background.success};
      } 
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: ${props => props.isMobile ? 0 : null};
    align-items: center;
    justify-content: center;

    .contact-info {
      display: flex;
      gap: 24px;
      jusitfy-content: center;
      align-items: center;

      a {
        display: flex;

        &.github {
          margin: -4px 4px 0 1px;
        }
      }
    }

    .job-title {
      color: black;
      font-weight: 500;
      margin: 12px 0;
      font-size: 22px;
      line-height: 20px;
    }

    .email {
      position: relative;
      display: flex;
      cursor: pointer;

      .toast {
        position: absolute;
        z-index: 20;
        left: calc(100% + 12px);
        top: -4px;
        white-space: nowrap;
        background: ${theme.colors.background.success};
        color: ${theme.colors.text.success};
        padding: 5px 8px 2px 8px;
      }
    }
  }
}`

export const MoreWrapper = styled.div`
  padding: ${props => props.isPhone ? '0 0 20px 0' : '0 20px 20px 20px'};

  &.dark p {
    color: ${themeDark.colors.text.light};
  }

  p {
    margin: 0;
    font-size: 20px;
    color: ${theme.colors.text.light};
    font-family: 'League Spartan';
  }
`

export const PortraitFoto = styled.div`
  width: 145px;
  height: 145px;
  overflow: hidden;
  border-radius: 50%;
  transition: all 1.5s ease;
  background: url(${props => props.src}) no-repeat center center;
`

export const ProfileTitle = styled.h1`
  white-space: nowrap;
  margin: 12px 0 0 0;
  background: linear-gradient(70deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main});
  font-weight: 700;
  font-size: 30px;
  color: black;
  line-height: 27px;
  padding: 7px 5px 2px 7px;
  text-shadow: 0px 1px 3px #4d5b5a80;
  border: 1px solid #f5f9f8;
  box-shadow: inset 0 0 4px #7e8f9d7a;
  color: white;

  &.dark {
    border: 1px solid black;
  }
`
