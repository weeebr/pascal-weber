import styled from "styled-components";
import { theme } from "shared/theme";

export const SwipeWrapper = styled.div`
position: absolute;
top: 50%;
left: 8px;
width: calc(100% - 16px);
height: auto;
background: white;
box-shadow: 0 0 20px ${theme.colors.divider};
z-index: 20;
padding: 16px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

svg {
  margin-right: 8px;
  width: 20px;
}
`;
