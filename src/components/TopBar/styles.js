import styled from 'styled-components';
import { theme, themeDark } from 'shared/theme';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 4%;
  border-bottom: 1px solid ${theme.colors.divider};
  align-items: center;
  max-height: ${props => props.isMobile ? null : '107px'};

  &.dark {
    border-color: ${themeDark.colors.divider};
  }

  span {
    display: flex;
    gap: 12px;
  }
`
