import styled, { css } from 'styled-components';

export const ProjectsWrapper = styled.div`
  & > span {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      gap: 8px;
    }
  }
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


export const ProjectCardWrapper = styled.div`
  display: flex;
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

  ${props => props.isMobile && (
    css`
      flex-direction: row;
      justify-content: space-between;
      padding: 19px 30px 16px 40px;
      width: 100%;
      height: auto;

      & > span {
        width: 170px;
      }
    `
  )};
  

  & > span {
    display: block;
  }

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
      transition: all .5s ease;
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