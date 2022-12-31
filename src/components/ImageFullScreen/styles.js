import styled, { css } from "styled-components";
import { theme, themeConstants } from "shared/theme";

export const FullScreenWrapper = styled.div`
  position: fixed;
  width: calc(100% - ${themeConstants.sidebarWidth});
  height: calc(100% - ${themeConstants.topbarWidth});
  left: ${themeConstants.sidebarWidth};
  top: ${themeConstants.topbarWidth};
  box-shadow: inset 0 0 0 40px ${theme.colors.primary.background};
  padding: 40px;
  z-index: 6;
  cursor: zoom-out;

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
