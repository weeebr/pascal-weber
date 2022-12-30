import styled from 'styled-components';
import { theme } from '../../shared/Theme/typography';

export const DesignWrapper = styled.div`
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
    flex-wrap: wrap;
    gap: 12px;
  }
`

export const Thumbnail = styled.div`
  width: ${props => props.isMobile ? "100%" : '217px'};
  height: 150px;
  border: 2px solid ${theme.colors.secondary.main};
  transition: all 1s ease;
  cursor: pointer;
  background: white;
  padding: 4px;

  div.img {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center;
    background-size: cover;
    transition: all 4s ease;

  }

  &:hover {
    transform: scale(1.08);
    transition: all 0s ease;
    background: ${theme.colors.secondary.main};

    div.img {
      filter: sepia(1);
      transition: all 0s ease;
    }
  }
`


