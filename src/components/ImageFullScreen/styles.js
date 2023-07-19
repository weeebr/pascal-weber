import styled, { css } from "styled-components";
import { theme, themeDark } from "shared/theme";

export const FullScreenWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  box-shadow: inset 0 0 0 40px ${theme.colors.primary.background};
  padding: 40px;
  z-index: 6;
  cursor: zoom-out;

  &.dark {
    box-shadow: inset 0 0 0 40px ${themeDark.colors.primary.background};

    div {
      background: url(${props => props.src}) no-repeat center center, ${themeDark.colors.primary.background};
    }

    span {
      background: ${themeDark.colors.primary.background};
    }
  }

  ${props => props.isMobile && (
    css`
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    `
  )};

  span {
    position: absolute;
    right: 0;
    top: 0;
    background: ${theme.colors.primary.background};
    padding: 20px;
  }

  div {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center, ${theme.colors.primary.background};
    background-size: contain;
  }
`;
