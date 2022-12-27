import styled from 'styled-components';

export const Main = styled.div`
  background: #F9F9F9;
  flex-grow: 1;

  & > div {
    padding: 20px;
  }
`

export const FullImage = styled.div`
  width: ${props => props.isOpen ? '80%' : '0%'};
  height: ${props => props.isOpen ? '80%' : '0%'};
  position: fixed;
  top: 5%;
  left: 10%;
  padding: ${props => props.isOpen ? '20px' : '0px'};
  opacity: 0;
  z-index: 9;
  transform-origin: center center;
  transition: width .3s ease, height .3s ease;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0 20px 0 #d9d6d6;

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

  .img {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center;
  }
`