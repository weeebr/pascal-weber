import { theme, themeDark } from 'shared/theme';

import styled from 'styled-components';

export const CvButtonsWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const CvToast = styled.span`
  position: absolute;
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  background: ${theme.colors.background.success};
  color: ${theme.colors.text.success};
  padding: 5px 8px 2px 8px;
  z-index: 20;
  animation: fadeIn 0.2s ease;

  &.dark {
    background: ${themeDark.colors.background.success};
    color: ${themeDark.colors.text.success};
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const PageTitle = styled.h2`
  font-size: ${props => props.isPhone ? '28px' : '40px' };
  font-weight: 700;
  margin: 0;
  transition: all 0.5s ease-in-out;

  &.dark {
    padding: 4px 12px;
    background: ${props => props.isDesign ? theme.colors.secondary.main : themeDark.colors.primary.background};
    font-size: ${props => props.isPhone ? '24px' : '40px' };

    a {
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.isDesign ? theme.colors.secondary.main : themeDark.colors.primary.background};
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
