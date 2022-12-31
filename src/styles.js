import styled from 'styled-components';
import { theme, themeDark } from "./shared/theme";

export const Main = styled.div`
  background: ${theme.colors.background.main};
  flex-grow: 1;

  & > div {
    padding: 20px;
  }

  &.dark {
    background: ${themeDark.colors.background.main};S
  }
`