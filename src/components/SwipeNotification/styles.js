
import styled from "styled-components";
import { theme } from "shared/theme";

export const SwipeWrapper = styled.div`
position: absolute;
top: 50%;
left: 0;
width: 100%;
height: auto;
background: ${theme.colors.background.main};
z-index: 20;
padding: 16px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

img {
  margin-right: 8px;
  width: 20px;
}
`;
