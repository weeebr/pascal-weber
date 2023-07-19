export const breakpoints = {
  phone: 400,
  mobile: 960,
  tablet: 1309,
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
      light: '#979292',
      success: '#008000',
    },
    background: {
      main: '#f3f2f2',
      success: '#d7f3c5',
    },
    toggle: {
      button: 'white',
      background: '#D9D9D9'
    }
  },
}

export const currentThemeColor = isDesign => isDesign ? '#bf9000' : '#0E3E6A';
export const currentThemeBg = isDarkTheme => isDarkTheme ? '#071524' : '#f3f2f2';

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
      light: '#7e8f9d',
      success: '#78e978',
    },
    background: {
      main: '#071524',
      success: '#2e4805',
    },
    toggle: {
      button: 'black',
      background: '#4e5c68'
    }
  }
}