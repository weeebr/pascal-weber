const mainAccentColor = '#9cd6d7';
const secondAccentColor = '#c7d981';
const thirdAccentColor = '#102733';

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
      background: '#def5f5' // modal bg
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
      light: '#8da2b3',
      success: '#769911',
    },
    background: {
      main: '#f0f5f4',
      success: '#d7ed97',
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
      background: '#a2d7d9',
    },
    secondary: {
      main: secondAccentColor,
      background: '#738966',
    },
    text: {
      main: mainAccentColor,
      light: '#7e8f9d',
      success: secondAccentColor,
    },
    background: {
      main: '#071524',
      success: '#697954',
    },
    toggle: {
      button: '#08202f',
      background: '#314955'
    }
  }
}

export const currentThemeColor = isDesign => isDesign ? secondAccentColor : mainAccentColor;
export const currentThemeBg = isDarkTheme => isDarkTheme ? themeDark.colors.background.main : theme.colors.background.main;
