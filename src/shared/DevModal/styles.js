import styled, { css } from "styled-components";

export const ProjectImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 200px;
  cursor: pointer;
`;

export const ProjectImagesWrapper = styled.span`
  padding: 20px;
  display: flex;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  max-width: 100%;

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
  background: #dde3e8;
`;

export const ButtonsWrapper = styled.span`
  &.buttons {
    position: absolute;
    bottom: 12px;
    left: 12px;
    padding: 20px 0;
    margin: 0;
    background: #dde3e8;
    width: calc(100% - 24px);
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
    background: #3c5366;

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

  & > span {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.isMobile ? "20px" : null};
    text-align: center;
    width: ${props => props.isMobile ? "100%" : null};
    width: ${props => props.isMobile ? "100%" : null};

    .title {
      font-size: 24px;
      font-weight: 600;
      color: #3c5366;
    }

    .year {
      font-size: 20px;
      color: #0E3E6A;
    }

    .description {
      font-size: 18px;
      color: #afafaf;
      margin-top: 20px;
      width: 100%;
      text-align: center;
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
      color: #afafaf;
      margin-top: 20px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  width: ${props => props.isMobile ? "100%" : "calc(100% - 270px)"};
  height: ${props => props.isMobile ? "100%" : "calc(100% - 103px)"};
  background: #dde3e8;
  box-shadow: inset 0 0 0 8px #0E3E6A;
  left: ${props => props.isMobile ? "0px" : "270px"};
  top: ${props => props.isMobile ? "0px" : "103px"};
  z-index: 4;
  flex-grow: 1;
  display: flex;  
  flex-direction: column;
  overflow: ${props => props.isMobile ? "auto" : null};

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