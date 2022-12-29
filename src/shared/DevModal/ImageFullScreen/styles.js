import styled from "styled-components";
export const FullScreenWrapper = styled.div`
  position: fixed;
  left: ${props => props.isMobile ? 0 : "270px"};
  top: ${props => props.isMobile ? 0 : "87px"};
  width: ${props => props.isMobile ? "100%" : "calc(100% - 270px)"};
  height: ${props => props.isMobile ? "100%" : "calc(100% - 87px)"};
  box-shadow: inset 0 0 0 40px #dde3e8;
  padding: 40px;
  z-index: 6;
  cursor: pointer;

  span {
    position: absolute;
    right: 0;
    top: 0;
    background: #dde3e8;
    padding: 20px;
  }

  div {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center, #dde3e8;
    background-size: contain;
  }
`;
