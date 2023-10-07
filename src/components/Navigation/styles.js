import { currentThemeColor, theme } from 'shared/theme';

import styled from 'styled-components';

export const PageTitle = styled.h2`
  font-size: ${props => props.isPhone ? '28px' : '40px' };
  font-weight: 700;
  margin: 0;
  color: ${theme.colors.navigation.pageTitle};
  transition: all 0.5s ease-in-out;

  &.dark {
    a {
      color: white;
    }
    background: ${props => currentThemeColor(props.isDesign) };
    padding: 4px 12px;
    font-size: ${props => props.isPhone ? '24px' : '40px' };

  }

  a {
    text-decoration: none;
    color: ${theme.colors.navigation.pageTitle};
  }
`

export const PageSubTitle = styled.h3`
  margin: 16px 0 20px 0;
  color: ${theme.colors.navigation.pageTitle};
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  font-size: ${props => props.isPhone ? '18px' : '24px' };
  
  &.dark {
    color: white;
  }
`;
