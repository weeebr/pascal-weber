import styled from 'styled-components';
import { theme } from '../../shared/Theme/typography';

export const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
  font-family: 'League Spartan';
  cursor: pointer;
  background: ${props => props.isDesign 
    ? theme.colors.primary 
    : theme.colors.secondary 
  };
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  height: 46px;

  &:hover, &:focus, &.pressed {
    &::before, &::after {
      transform: translateY(0);
    }
  }

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
    background: ${theme.colors.divider};
    z-index: 1;
  }

  &::after {
    transition-delay: 0.2s;
    background: ${props => props.isDesign 
      ? theme.colors.primary 
      : theme.colors.secondary 
    };
    z-index: 2;
  }

  a {
    text-decoration: none;
    color: white;
    position: relative;
    z-index: 3;
    white-space: nowrap;
    line-height: 46px;
    padding: 0 4px;
  }

  &.cv {
    background: black;
    color: white;

    &::after {
      background: black;
    }
  }
`