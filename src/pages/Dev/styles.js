import styled, { css } from 'styled-components';

export const ProjectsWrapper = styled.div`
  & > div {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`
export const LinkButton = styled.a`
  text-decoration: none;
  
  span {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #0E3E6A;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 8px 1px 8px;
    transition: all 0.5s ease;

    svg {
      width: 12px;
      margin: 0 4px 4px 0;
    }
  }

  &:hover {
    span.link {
      color: #0E3E6A;
      background: white;
      transition: all 0s ease;

      svg path {
        fill: #0E3E6A;
      }
    }
  }
`;


export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isOpen ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 180px;
  height: 195px;
  flex-direction: column;
  border: 2px solid #0e3e6a;
  background: white;
  text-align: center;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.08);
    transition: all 0s ease;
    background: #0E3E6A;
    color: white;

    & span {
      color: white;
    }

    & svg path {
      fill: white;
    }
  }

  p {
    margin: 0;
  }

  div.img {
    width: 150px;
    flex-grow: 1;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    filter: grayscale(1);
    scale: 0.6;
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