import styled from 'styled-components';

export const PageSubTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => props.isDesign ? '#bf9000' : '#0E3E6A'};
  font-weight: 600;
  font-size: 24px;
`;

export const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: ${props => props.isDesign ? '#bf9000' : '#0E3E6A'};
`

export const ProfileTitle = styled.h1`
  white-space: nowrap;
  margin: 12px 0 0 0;
  font-weight: 700;
  font-size: 30px;
  color: #3c5366;
  color: black;
  line-height: 27px;
`