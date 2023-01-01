import styled from 'styled-components';

export const breakpoints = {
  mobile: 880,
  tablet: 1309,
  desktop: 1280,
  largeDesktop: 1440,
};

export const themeConstants = {
  sidebarWidth: '270px',
  topbarHeight: '103px',
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
    },
    toggle: {
      button: 'white',
      background: '#D9D9D9'
    }
  },
}

export const currentThemeColor = isDesign => isDesign ? '#bf9000' : '#0E3E6A';
export const currentThemeBg = isDarkTheme => isDarkTheme ? '#071524' : '#F9F9F9';

export const themeDark = {
  colors: {
    divider: '#4e5c68',
    primary: {
      main: '#0E3E6A',
      background: '#132538',
      borders: '#0E3E6A'
    },
    secondary: {
      main: '#bf9000',
      background: '#2a2413',
      borders: '#bf9000',
    },
    text: {
      main: '#afafaf',
      light: '#5f6e7e',
      success: '#008000',
    },
    background: {
      main: '#071524',
      success: '#7bdf3d2b',
    },
    toggle: {
      button: 'black',
      background: '#4e5c68'
    }
  }
}

export const PageSubTitle = styled.h3`
  margin: ${props => props.isMobile ? '12px 0 20px 0' : '0 0 20px 0'}; 
  color: ${props => currentThemeColor(props.isDesign) };
  font-weight: 600;
  font-size: 24px;
  transition: all 0.5s ease-in-out;

  &.dark {
    color: white;
  }
`;

export const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  color: ${props => currentThemeColor(props.isDesign) };
  transition: all 0.5s ease-in-out;

  &.dark {
    a {
      color: white;
    }
    background: ${props => currentThemeColor(props.isDesign) };
    padding: 4px 12px;
  }

  a {
    text-decoration: none;
    color: ${props => currentThemeColor(props.isDesign) };
  }
`

export const ProfileTitle = styled.h1`
  white-space: nowrap;
  margin: 12px 0 0 0;
  font-weight: 700;
  font-size: 30px;
  color: black;
  line-height: 27px;

  &.dark {
    color: white;
  }
`