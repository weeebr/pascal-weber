import { theme } from "shared/theme";
import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  margin-bottom: 87px;
  margin-top: ${props => props.isMobile ? 0 : '32px'};

  & > div.img {
    margin-top: 20px;
    width: calc(100% - 16px);
    height: 100%;
    background: url(${props => props.src}) no-repeat center center;
    background-size: contain;
    transition: all .2s cubic-bezier(0.42, 0, 0.93, 0.43);
  }

  span {
    font-size: 18px;
    color: ${theme.colors.text.main};
    width: 100%;

    &.client {
      font-size: 24px;
      font-weight: 600;
      color: ${theme.colors.secondary.main};
    }

    &.description {
      margin-top: 20px;
    }
  }
`;

export const Bottom = styled.span`
  position: absolute;
  bottom: 12px;
  padding-bottom: 12px;
  left: 12px;
  width: calc(100% - 24px);
  z-index: 5;
  background: ${theme.colors.secondary.background.main};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .prev, .next {
    color: white;    
    background: ${theme.colors.secondary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 43px;
    width: 56px;
    cursor: pointer;
    
    svg {
      height: 16px;
      width: 20px;
      margin-bottom: 4px;
    }
  }
`;