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
  }

  span {
    font-size: 18px;
    color: #C3C3C3;
    width: 100%;

    &.client {
      font-size: 24px;
      font-weight: 600;
      color: #bf9000;
      margin-top: -6px;
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
  background: #f9f9f9;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .prev, .next {
    color: #bf9000;
    background: transparent;
    box-shadow: inset 0 0 0 2px #bf9000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 43px;
    width: 56px;
    cursor: pointer;

    img {
      width: 16px;
      margin: ${props => props.isMobile ? 0 : null};
    }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  width: ${props => props.isMobile ? "100%" : "calc(100% - 270px)"};
  height: ${props => props.isMobile ? "100%" : "calc(100% - 103px)"};
  background: #fff;
  left: ${props => props.isMobile ? 0 : "270px"};
  top: ${props => props.isMobile ? 0 : "103px"};
  z-index: 4;
  border: 12px solid #bf9000;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  span.close {
    position: absolute;
    right: 12px;
    top: 12px;
    padding: 8px 12px;
    
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