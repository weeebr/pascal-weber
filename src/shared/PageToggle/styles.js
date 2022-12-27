import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
  font-family: 'League Spartan';
  padding: 8px 12px;
  box-shadow: inset 0 0 0 2px white;
  cursor: pointer;
  background: ${props => props.page === '/design' ? '#0E3E6A' : '#bf9000'};

  a {
    text-decoration: none;
    color: white;
  }

  &.cv {
    background: black;
    color: white;
  }
`