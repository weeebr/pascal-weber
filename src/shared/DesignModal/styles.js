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
    transition: all .2s cubic-bezier(0.42, 0, 0.93, 0.43);
  }

  span {
    font-size: 18px;
    color: #afafaf;
    width: 100%;

    &.client {
      font-size: 24px;
      font-weight: 600;
      color: #bf9000;
      margin-top: -6px;
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
  background: #f9efd0;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .prev, .next {
    color: white;    
    background: #bf9000;
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
  position: fixed;
  width: ${props => props.isMobile ? "100%" : "calc(100% - 270px)"};
  height: ${props => props.isMobile ? "100%" : "calc(100% - 103px)"};
  &.modal {
    background: #f9efd0;
  }
  box-shadow: inset 0 0 0 8px #bf9000;
  left: ${props => props.isMobile ? 0 : "270px"};
  top: ${props => props.isMobile ? 0 : "103px"};
  z-index: 4;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

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