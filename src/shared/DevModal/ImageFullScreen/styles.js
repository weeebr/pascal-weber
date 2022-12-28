import styled from "styled-components";
export const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: inset 0 0 0 40px #dde3e8;
  padding: 40px;
  width: 100%;
  height: 100%;
  z-index: 6;
  cursor: pointer;

  img {
    position: absolute;
    right: 0px;
    top: 0px;
    background: #dde3e8;
    padding: 30px;
  }

  div {
    width: 100%;
    height: 100%;
    background: url(${props => props.src}) no-repeat center center, #dde3e8;
    background-size: contain;
  }
`;
