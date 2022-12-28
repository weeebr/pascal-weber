import styled, { css } from "styled-components";

export const ProjectImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 200px;
`;

export const ProjectImagesWrapper = styled.span`
  background: #dde3e8;
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
  background: #f9f9f9;
`;

export const ButtonsWrapper = styled.span`
  &.buttons {
    position: absolute;
    bottom: 12px;
    left: 12px;
    padding: 20px 0;
    margin: 0;
    background: #f9f9f9;
    width: calc(100% - 24px);
    flex-direction: row;
    border-bottom: 12px solid #0e3e6a;
  }
  display: flex;
  gap: 8px;
  margin-top: 20px;
  width: 100%;
  justify-content: center;

  .link a {
    background: #0E3E6A;
    color: white;
  }

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

    svg {
      width: 20px;
      margin-bottom: 4px;
      margin-right: 12px;
    }
  }

 
  .next img {
    margin: 0 0 3px 8px;
  }

  .prev img {
    margin: 0 8px 3px 0;
  }
  

  .prev, .next {
    color: #0E3E6A;
    background: transparent;
    box-shadow: inset 0 0 0 2px #0E3E6A;

    img {
      width: 16px;
      margin: ${props => props.isMobile ? "0 0 2px 0px" : null};
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.isMobile ? "flex-start" : 'center'};
  flex-direction: ${props => props.isMobile ? "column" : 'row'};

  & > span {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.isMobile ? "20px" : null};
    text-align: center;
    width: ${props => props.isMobile ? "100%" : null};


    .title {
      font-size: 24px;
      font-weight: 600;
      color: #0E3E6A;
    }

    .year {
      font-size: 20px;
      color: #0E3E6A;
    }

    .description {
      font-size: 18px;
      color: #C3C3C3;
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
    height: 100%;

    .description {
      font-size: 18px;
      color: #C3C3C3;
      margin-top: 20px;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  width: ${props => props.isMobile ? "100%" : "calc(100% - 270px)"};
  height: ${props => props.isMobile ? "100%" : "calc(100% - 87px)"};
  background: #fff;
  left: ${props => props.isMobile ? "0px" : "270px"};
  top: ${props => props.isMobile ? "0px" : "87px"};
  z-index: 4;
  box-shadow: inset 0 0 0 12px #0E3E6A;
  flex-grow: 1;
  display: flex;  
  flex-direction: column;
  overflow: ${props => props.isMobile ? "auto" : null};

  span.close {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    ${props => props.isMobile && (
      css`
        position: absolute;
        right: 20px;
      `
    )}
    
    img {
      cursor: pointer;
    }
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