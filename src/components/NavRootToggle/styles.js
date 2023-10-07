import { currentThemeColor, theme, themeDark } from 'shared/theme';

import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${props => props.isPhone ? '16px' : '24px' };
  height: ${props => props.isPhone ? '30px' : '46px' };
  font-weight: 600;
  font-family: 'League Spartan';
  cursor: pointer;
  background: ${props => currentThemeColor(!props.isDesign)};
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.35s ease;
    transform: translateY(-150%);
  }

  &::before {
    background: ${theme.colors.toggle.background};
    z-index: 1;

     &.dark {
      background: ${themeDark.colors.toggle.background};
     }
  }

  &::after {
    transition-delay: 0.2s;
    background: ${props => currentThemeColor(!props.isDesign)};
    z-index: 2;
  }

  &:hover, &:focus, &.pressed {
    &::before, &::after {
      transform: translateY(0);
    }
  }

  a {
    text-decoration: none;
    color: white;
    position: relative;
    z-index: 3;
    white-space: nowrap;
    line-height: ${props => props.isPhone ? '30px' : '46px' };
    padding: 0 4px;
  }

  &.cv {
    background: ${theme.colors.navigation.pageTitle};

    &.dark {
      background: ${themeDark.colors.toggle.background};


      &::after {
        background: ${themeDark.colors.toggle.background};
      }

      span {
        color: white;
      }

      svg path {
        fill: white;
      }
    }

    &:hover a svg {
      margin-top: 3px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-right: 8px;
      }

      svg {
        margin: -2px 0 0 -4px;
        width: ${props => props.isPhone ? '12px' : '18px' };
        transition: all 0.3s ease;
      }
    }

    &::after {
      background: black;
    }
  }
`
