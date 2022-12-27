import styled, { css } from 'styled-components';

export const ProjectsWrapper = styled.div`
  h3 {
    margin: 0 0 20px 0;
    color: #0E3E6A;
    font-weight: 600;
    font-size: 24px;
  }
 & > div {
  display: flex;
  gap: 8px;
 }
`
export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isOpen ? 'column' : 'row'};
  justify-content: center;
  padding: 8px;
  width: 180px;
  height: 195px;
  flex-direction: column;
  border: 2px solid #0e3e6a;
  background: white;
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  p {
    margin: 0;
  }

  img {
    width: 150px;
    flex-grow: 1;

    ${props => props.isOpen && (
      css`
      width: 100%;
      padding: 0 20px;
      `
    )}
  }

  a {
    color: #0E3E6A;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    img {
      width: 12px;
      margin: 12px 4px 0 0;
    }
  }
  
  .title {
    font-weight: 600;
    font-size: 18px;
  }

  .year {
    font-size: 16px;
  }

  & > p {
    flex-grow: 1;
  }
`
export const FullProject = styled.div`
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