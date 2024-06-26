import styled, { css } from "styled-components";

import { theme } from 'shared/theme';

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.isMobile ? "flex-start" : 'center'};
  flex-direction: ${props => props.isMobile ? "column" : 'row'};
  height: 100%;

  &.dark > span {
    font-size: 20px;
    color: white;
  }

  & > span {
    margin: 0 20px 0 44px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${theme.colors.navigation.pageTitle};

    ${props => props.isMobile && (
      css`
        width: 100%;
        margin: 0 0 20px 0;
      `
    )};

    .title {
      font-size: 24px;
      font-weight: 600;
    }

    .year {
      font-size: 20px;
    }

    .description { // only used for mobile
      white-space: break-spaces;
    }
  }

  & > div {
    display: grid;
    justify-content: center;
    width: 100%;
    flex-grow: 1;

    .description {
      font-size: 20px;
      color: ${theme.colors.text.main};
      margin: 20px 20px 0 20px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ProjectImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  min-width: 240px;
  aspect-ratio: 16/9;
  width: 100%;
  cursor: zoom-in;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 8px white;
  }
`;

export const ProjectImagesWrapper = styled.span`
  display: flex;
  gap: 20px;
  overflow: hidden;
  max-width: calc(100% - 40px);
  justify-content: center;

  ${props => props.isMobile &&
    css`
      overflow-y: auto;
      width: 100%;
      height: calc(100vh - 230px);
      flex-direction: column;
      overflow: auto;
      gap: unset;
      align-items: center;
      justify-content: center;
      padding: 8px;

      & > div {
        width: 100%;
      }
    `
  }
`

export const ButtonsWrapper = styled.span`
  &.buttons {
    position: absolute;
    bottom: 12px;
    left: 8px;
    padding: ${props => props.isMobile ? "12px 0" : "20px 0"};
    margin: 0;
    background: ${theme.colors.primary.background.main};
    width: calc(100% - 16px);
    flex-direction: row;
  }
  display: flex;
  gap: 8px;
  margin-top: 20px;
  width: 100%;
  justify-content: center;

  .link a, .prev, .next {
    padding: 12px 20px 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    height: 43px;
    user-select: none;
    color: white;
    background: ${theme.colors.navigation.pageTitle};

    svg {
      width: 20px;
      margin-bottom: 4px;
      margin-right: 12px;
    }
  }

 
  .next svg {
    margin: 0 0 3px 8px;
    margin-left: ${props => props.isMobile ? 0 : null};
  }

  .prev svg {
    margin: 0 8px 3px 0;
    margin-right: ${props => props.isMobile ? 0 : null};
  }

  .prev, .next {
    svg {
      height: 16px;
      width: 20px;
    }
  }
`

