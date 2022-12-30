import styled, { css } from "styled-components";
import { theme } from "shared/theme";

export const FullScreenWrapper = styled.div`
  position: fixed;
  width: calc(100% - 270px);
  height: calc(100% - 87px);
  left: 270px;
  top: 87px;
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
