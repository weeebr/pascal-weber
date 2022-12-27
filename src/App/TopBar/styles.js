import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F9F9F9;
  padding: 20px;
  border-bottom: 1px solid #D9D9D9;

  h2 {
    font-size: 40px;
    font-weight: 700;
    margin: 0;

    &.design {
      color: #bf9000;
    }

    &.dev {
      color: #0E3E6A;
    }
  }

  span {
    display: flex;
    gap: 12px;
  }
`
