import styled from 'styled-components';

export const Main = styled.div`
  background: #F9F9F9;
  flex-grow: 1;

  & > div {
    padding: ${props => props.isMobile ? '28px 22px' : '28px'};
    background: #F9F9F9;
  }
`