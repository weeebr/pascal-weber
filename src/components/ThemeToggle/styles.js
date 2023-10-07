import { theme, themeDark } from "shared/theme";

import styled from "styled-components";

export const ToggleWrapper = styled.label`
  margin: auto;

  .toggle {
    height: 36px;
    width: 80px;
    padding: 5px 0;
    background: ${theme.colors.toggle.background};
    border-radius: 40px;
    position: relative;
    cursor: pointer;

    &.dark {
      background: ${themeDark.colors.toggle.background};

      &::before {
        background: ${themeDark.colors.toggle.button};
        box-shadow: 0 1px 0 1px #313a42;
        transform: translateX(44px);
      }
    }

    &::before {
      content: "";
      display: block;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: ${theme.colors.toggle.button};
      position: absolute;
      z-index: 2;
      box-shadow: 0 1px 0 1px #f8fffe;
      margin: -3px 0px 0 3px;
      transform: translate(0);
      transition: all .6s ease;
    }

    input {
      opacity: 0;
      position: absolute;
      top: 0;
    }

    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: 0 5px;

      svg {
        height: 30px;
        width: 30px;
        z-index: 1;
        fill: white;
      }
    }
  }
`
