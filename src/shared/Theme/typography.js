import styled from 'styled-components';

export const PageSubTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => props.type === 'design' ? '#bf9000' : '#0E3E6A'};
  font-weight: 600;
  font-size: 24px;
`;

export const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: ${props => props.type === '/design' ? '#bf9000' : '#0E3E6A'};
`