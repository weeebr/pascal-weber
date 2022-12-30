import styled from 'styled-components';

export const breakpoints = {
  mobile: 880,
  tablet: 1024,
  desktop: 1280,
  largeDesktop: 1440,
};

export const theme = {
  colors: {
    divider: '#D9D9D9',
    primary: {
      main: '#0E3E6A',
      background: '#dde3e8'
    },
    secondary: {
      main: '#bf9000',
      background: '#f9efd0',
    },
    text: {
      main: '#afafaf',
      light: '#C3C3C3',
      success: '#008000',
    },
    background: {
      main: '#F9F9F9',
      success: '#7bdf3d2b',
    }
  },
  currentColor: props => props.isDesign ? '#bf9000' : '#0E3E6A',
  otherColor: props => !props.isDesign ? '#bf9000' : '#0E3E6A',
}

export const PageSubTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => theme.currentColor(props) };
  font-weight: 600;
  font-size: 24px;
`;

export const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: ${props => theme.currentColor(props) };
`

export const ProfileTitle = styled.h1`
  white-space: nowrap;
  margin: 12px 0 0 0;
  font-weight: 700;
  font-size: 30px;
  color: black;
  line-height: 27px;
`