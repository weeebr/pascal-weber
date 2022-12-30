import styled from "styled-components";
import { theme } from "./../../Theme/typography";

export const FullScreenWrapper = styled.div`
  position: fixed;
  left: ${props => props.isMobile ? 0 : "270px"};
  top: ${props => props.isMobile ? 0 : "87px"};
  width: ${props => props.isMobile ? "100%" : "calc(100% - 270px)"};
  height: ${props => props.isMobile ? "100%" : "calc(100% - 87px)"};
  box-shadow: inset 0 0 0 40px ${theme.colors.primary.background};
  padding: 40px;
  z-index: 6;
  cursor: zoom-out;

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
