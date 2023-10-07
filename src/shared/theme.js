const mainAccentColor = '#c1dfde';
const secondAccentColor = '#c6d58f';
const thirdAccentColor = '#4d5b5a';

export const breakpoints = {
  phone: 400,
  mobile: 960,
  tablet: 1309,
};

export const theme = {
  colors: {
    divider: '#dbe7e6',
    primary: {
      main: mainAccentColor,
      background: '#deefed' // modal bg
    },
    secondary: {
      main: secondAccentColor,
      background: '#dee7c9', // modal bg
    },
    navigation: {
      pageTitle: thirdAccentColor,
    },
    text: {
      main: '#4d5b5a',
      light: '#7e8f9d',
      success: '#008000',
    },
    background: {
      main: '#f0f5f4',
      success: '#d7f3c5',
    },
    toggle: {
      button: 'white',
      background: '#d9e5e5'
    }
  },
}

export const themeDark = {
  colors: {
    divider: '#375565',
    primary: {
      main: mainAccentColor,
      background: '#7ca0a4',
    },
    secondary: {
      main: secondAccentColor,
      background: '#738966',
    },
    text: {
      main: mainAccentColor,
      light: '#7e8f9d',
      success: '#78e978',
    },
    background: {
      main: '#071524',
      success: '#2e4805',
    },
    toggle: {
      button: '#08202f',
      background: '#314955'
    }
  }
}

export const currentThemeColor = isDesign => isDesign ? secondAccentColor : mainAccentColor;
export const currentThemeBg = isDarkTheme => isDarkTheme ? themeDark.colors.background.main : theme.colors.background.main;
