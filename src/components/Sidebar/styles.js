import styled from 'styled-components';
import { theme, themeConstants } from 'shared/theme';

export const Summary = styled.div`
  background: ${theme.colors.background.main};
  max-width: ${props => props.isMobile ? "100%" : themeConstants.sidebarWidth};
  position: relative;
  display: flex;
  border-right: ${props => props.isMobile ? null : `1px solid ${theme.colors.divider}`};
  flex-direction: column;
  justify-content: center;
  text-align: ${props => props.isMobile ? "center" : "right"};

  .summary {
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isMobile ? "center" : "flex-end"};
    padding: 20px;

    .contact-info {
      display: flex;
      gap: 24px;
      jusitfy-content: center;
      align-items: center;

      a {
        display: flex;

        &.github {
          margin: -4px 4px 0 1px;
        }
      }
    }

    .job-title {
      color: black;
      font-weight: 500;
      margin: 12px 0;
      font-size: 22px;
      line-height: 20px;
    }

    .email {
      position: relative;
      display: flex;

      .toast {
        position: absolute;
        left: calc(100% + 12px);
        top: -4px;
        white-space: nowrap;
        background: ${theme.colors.background.success};
        color: ${theme.colors.text.success};
        padding: 5px 8px 2px 8px;
      }
    }
  }
}`

export const MoreWrapper = styled.div`
  padding: 0 20px 20px 20px;

  p {
    margin: 0;
    font-size: 18px;
    color: ${theme.colors.text.light};
    font-family: 'League Spartan';
  }
`

export const PortraitFoto = styled.div`
  width: 145px;
  height: 145px;
  overflow: hidden;
  border-radius: 50%;
  transition: all 1.5s ease;
  background: url(${props => props.src}) no-repeat center center;
`