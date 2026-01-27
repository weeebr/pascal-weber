import { theme, themeDark } from 'shared/theme';

import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.isMobile ? '30px 16px' : '30px 4%'};
  border-bottom: 1px solid ${theme.colors.divider};
  align-items: center;
  max-height: ${props => props.isMobile ? null : '107px'};
  transition: all 2s ease;

  &.dark {
    border-color: ${themeDark.colors.divider};
    transition: all 1s ease;
  }

  > span {
    display: flex;
    gap: 12px;
  }
`
