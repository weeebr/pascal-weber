import styled, { css } from 'styled-components';
import { theme, themeDark } from 'shared/theme';

export const ProjectsWrapper = styled.div`
  padding: ${props => props.isPhone ? '16px' : '5%'};
  margin-left: ${props => props.isMobile ? 0 : '4%'};

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
    background: ${themeDark.colors.background.main};

    svg path {
      fill: white;
    }
  }
  
  span {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 8px 1px 8px;
    transition: all 0.5s ease;
    color: ${theme.colors.background.main};
    background: ${theme.colors.navigation.pageTitle};

    svg {
      width: 12px;
      margin: 0 4px 4px 0;
      fill: ${theme.colors.background.main};
    }
  }

  &:hover {
    span.link {
      color: ${theme.colors.navigation.pageTitle};
      background: white;
      transition: all 0s ease;

      svg path {
        fill: ${theme.colors.navigation.pageTitle};
      }
    }
  }
`;

export const Thumbnail = styled.div`
  width: ${props => props.isMobile ? "100%" : '31%'};
  height: 150px;
  border: 7px solid ${theme.colors.secondary.main};
  transition: all 1s ease;
  cursor: pointer;

  &.dark {
    background: ${themeDark.colors.secondary.background};
  }

  div.image {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    transition: all 4s ease;
    filter: grayscale(1);
  }

  &:hover {
    transform: scale(1.08);
    transition: all 0s ease;
    background: ${theme.colors.secondary.main};

    div.image {
      filter: none;
      transition: all 0s ease;
    }
  }
`

export const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 31%;
  height: 195px;
  flex-direction: column;
  box-shadow: 0 0 0 1px ${theme.colors.primary.main};
  background: ${theme.colors.primary.background};
  text-align: center;
  cursor: pointer;
  transition: all 1s ease;

  &.dark {
    box-shadow: none;
    background: ${themeDark.colors.primary.background};
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
    box-shadow: none;
    background: ${theme.colors.secondary.main};
    color: ${theme.colors.navigation.pageTitle};

    & > span, svg path {
      color: ${theme.colors.navigation.pageTitle};
      fill: ${theme.colors.background.main};
    }

    & svg path {
      fill: white;
      transition: all .5s ease;
    }
  }

  p {
    margin: 0;
  }

  div.image {
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
