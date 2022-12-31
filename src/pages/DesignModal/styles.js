import styled, { css } from "styled-components";
import { theme, themeConstants } from "shared/theme";

export const ProjectImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 200px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  margin-bottom: 62px;

  & > div.img {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center;
    background-size: contain;
    transition: all .2s cubic-bezier(0.42, 0, 0.93, 0.43);
  }

  span {
    font-size: 18px;
    color: ${theme.colors.text.main};;
    width: 100%;

    &.client {
      font-size: 24px;
      font-weight: 600;
      color: ${theme.colors.secondary.main};
    }

    &.description {
      margin-top: 20px;
    }
  }
`;

export const Bottom = styled.span`
  position: absolute;
  bottom: 12px;
  padding-bottom: 12px;
  left: 12px;
  width: calc(100% - 24px);
  z-index: 5;
  background: ${theme.colors.secondary.background.main};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .prev, .next {
    color: white;    
    background: ${theme.colors.secondary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 43px;
    width: 56px;
    cursor: pointer;
    
    svg {
      height: 16px;
      width: 20px;
      margin-bottom: 4px;
    }
  }
`;

export const ModalWrapper = styled.div`
  &.modal {
    background: ${theme.colors.secondary.background};
  }
  position: fixed;
  z-index: 4;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 0 8px ${theme.colors.secondary.main};
  overflow: hidden;
  transition: all .3s ease-in-out;

  width: calc(100% -  ${themeConstants.sidebarWidth});
  height: calc(100% - ${themeConstants.topbarWidth});
  left: ${themeConstants.sidebarWidth};
  top: ${themeConstants.topbarWidth};
 
  ${props => props.isMobile && (
    css`
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    `
  )};

  ${props => !props.fade && (
    css`
      height: 0;
      box-shadow: none;
      background: ${theme.colors.secondary.main} !important;
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
    right: 12px;
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