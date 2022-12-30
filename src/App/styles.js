import styled from 'styled-components';
import { theme } from "./../shared/Theme/typography";

export const Main = styled.div`
  background: ${theme.colors.background};
  flex-grow: 1;

  & > div {
    padding: 20px;
    background: ${theme.colors.background};
  }
`