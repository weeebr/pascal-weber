import styled from 'styled-components';

export const Main = styled.div`
  background: #F9F9F9;
  flex-grow: 1;

  & > div {
    padding: 20px;
    background: #F9F9F9;
    span {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }
  }
`