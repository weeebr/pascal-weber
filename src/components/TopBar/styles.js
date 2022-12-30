import styled from 'styled-components';
import { theme } from 'shared/theme';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.background.main};
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.divider};

  span {
    display: flex;
    gap: 12px;
  }
`
