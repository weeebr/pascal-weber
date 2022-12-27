import styled from "styled-components";

export const ProjectImage = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 200px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.isMobile ? "flex-start" : 'center'};
  flex-grow: 1;
  flex-direction: column;
  flex-direction: ${props => props.isMobile ? "column" : 'row'};

  & > span {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.isMobile ? "20px" : null};

    .title {
      font-size: 24px;
      font-weight: 600;
      color: #0E3E6A;
    }

    .year {
      font-size: 20px;
      color: #0E3E6A;
    }
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;

    .images {
      background: #0e3e6a59;
      padding: 20px;
      display: flex;
      gap: 20px;
      overflow: hidden;
      flex-wrap: wrap;
      width: 100%;
    }

    .description {
      font-size: 18px;
      color: #C3C3C3;
      margin-top: 20px;
      width: 100%;
    }

    .link a {
      padding: 12px 20px 10px 20px;
      color: white;
      background: #0E3E6A;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: ${props => props.isMobile ? null : "20px"};;
      cursor: pointer;
      text-decoration: none;

      svg {
        width: 20px;
        margin-bottom: 4px;
        margin-right: 12px;
      }
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
  z-index: 10;
  border: 12px solid #0E3E6A;
  flex-grow: 1;
  display: flex;  
  flex-direction: column;
  overflow: ${props => props.isMobile ? "scroll" : null};

  span.close {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    
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