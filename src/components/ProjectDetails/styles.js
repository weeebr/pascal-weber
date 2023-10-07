import styled, { css } from "styled-components";
import { theme, themeDark } from 'shared/theme';

import { topbarHeight } from "shared/constants";

export const ModalWrapper = styled.div`
  &.modal {
    height: calc(100% - ${topbarHeight});
    position: relative;
    background: ${props => props.isDev ? theme.colors.primary.background : theme.colors.secondary.background};

    ${props => props.isMobile && (
    css`
      position: fixed;
      height: 100%;
      top: 0;
    `)};
    
    &.dark {
      background: ${props => props.isDev ? themeDark.colors.primary.background : themeDark.colors.secondary.background}; 
      box-shadow: inset 0 0 0 8px ${props => props.isDev ? themeDark.colors.primary.main : themeDark.colors.secondary.main}; ;
    }
  }
  box-shadow: inset 0 0 0 8px ${props => props.isDev ? theme.colors.primary.main : theme.colors.secondary.main};
  z-index: 4;
  flex-grow: 1;
  display: flex;  
  flex-direction: column;
  overflow: hidden;
  transition: all .3s ease-in-out;
 
  ${props => props.isMobile && (
    css`
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      padding: 32px 20px;
    `
  )};

  ${props => !props.fade && (
    css`
      &.modal.modal {
        background: ${theme.colors.primary.main}
      }
      height: 0;
      box-shadow: none;
      padding: 0;
      overflow: hidden;
      width: 0;
      left: 50%;

      & * {
        width: 0;
        heigth: 0;
        opacity: 0;
      }
    `
  )};

  span.close {
    position: absolute;
    right: 8px;
    top: 12px;
    padding: 8px 12px;
    cursor: pointer;
  }

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-done {
    opacity: 1;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;
