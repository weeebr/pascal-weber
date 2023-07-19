import styled, { css } from "styled-components";
import { theme } from 'shared/theme';

export const ProjectImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 200px;
  cursor: zoom-in;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 8px white;
  }
`;

export const ProjectImagesWrapper = styled.span`
  padding: 20px;
  display: flex;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;

  ${props => props.isMobile &&
    css`
      overflow-y: scroll;
      width: 100%;
      height: calc(100vh - 230px);
      overflow: auto;
      align-items: center;
      justify-content: center;
      padding: 8px;

      & > div {
        width: 100%;
      }
    `
  }
`

export const Bottom = styled.span`
  position: absolute;
  bottom: 12px;
  padding-bottom: 12px;
  left: ${props => props.isMobile ? "12px" : "calc(27px + 200px)"};
  width: ${props => props.isMobile ? "calc(100% - 24px)" : "calc(100% - 39px - 200px)"};
  z-index: 5;
  background: ${theme.colors.primary.background.main};
`;

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
    background: ${theme.colors.primary.main};

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

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.isMobile ? "flex-start" : 'center'};
  flex-direction: ${props => props.isMobile ? "column" : 'row'};
  height: 100%;

  &.dark > span {
    color: white;
  }

  & > span {
    margin: 0 20px 0 44px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.isMobile ? "20px" : null};
    text-align: center;
    width: ${props => props.isMobile ? "100%" : null};
    color: ${theme.colors.primary.main};

    .title {
      font-size: 24px;
      font-weight: 600;
    }

    .year {
      font-size: 20px;
    }
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;

    .description {
      font-size: 18px;
      color: ${theme.colors.text.main};
      margin: 20px 20px 0 20px;
      width: 100%;
      text-align: center;
    }
  }
`;