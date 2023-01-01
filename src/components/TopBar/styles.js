import styled from 'styled-components';
import { theme, themeDark, themeConstants } from 'shared/theme';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.divider};
  height: ${props => props.isMobile ? null : themeConstants.topbarHeight};
  align-items: center;

  &.dark {
    border-color: ${themeDark.colors.divider};
  }

  span {
    display: flex;
    gap: 12px;
  }
`
