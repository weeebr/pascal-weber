import styled from 'styled-components';
import { theme } from '../../shared/Theme/typography';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F9F9F9;
  padding: 20px;
  border-bottom: 1px solid ${theme.colors.divider};

  span {
    display: flex;
    gap: 12px;
  }
`
