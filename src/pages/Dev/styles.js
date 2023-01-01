import styled, { css } from 'styled-components';
import { theme, themeDark } from 'shared/theme';

export const ProjectsWrapper = styled.div`
  & > span {
    display: flex;
    justify-content: space-between;
    
  ${props => props.isMobile && (
    css`
      height: 54px;
      align-items: center;
    `
  )}

    span {
      display: flex;
      gap: 8px;
      align-items: center;
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

  &.dark span.link {
    color: white;

    svg path {
      fill: white;
    }
  }
  
  span {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${theme.colors.primary.main};
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
      color: ${theme.colors.primary.main};
      background: white;
      transition: all 0s ease;

      svg path {
        fill: ${theme.colors.primary.main};
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
  border: 3px solid ${theme.colors.primary.main};
  background: white;
  text-align: center;
  cursor: pointer;
  transition: all 1s ease;

  &.dark {
    background: transparent;
    & > * {
      color: white;
    }
  }

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
    background: ${theme.colors.primary.main};
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