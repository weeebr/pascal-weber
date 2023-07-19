import styled from 'styled-components';
import { currentThemeColor } from 'shared/theme';

export const PageTitle = styled.h2`
  font-size: ${props => props.isPhone ? '28px' : '40px' };
  font-weight: 700;
  margin: 0;
  color: ${props => currentThemeColor(props.isDesign) };
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
    color: ${props => currentThemeColor(props.isDesign) };
  }
`

export const PageSubTitle = styled.h3`
  margin: 16px 0 20px 0;
  color: ${props => currentThemeColor(props.isDesign) };
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  font-size: ${props => props.isPhone ? '16px' : '24px' };
  
  &.dark {
    color: white;
  }
`;