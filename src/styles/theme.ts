import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,

  fontSizes: {
    ...theme.fontSizes,
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.19rem', // 19px
    '2xl': '1.31rem', // 21px
    '3xl': '1.5rem', // 24px
    '4xl': '1.63rem', // 26px
    '5xl': '2rem', // 32px
    '6xl': '2.5rem', // 40px
    '7xl': '3rem' // 48px
  },

  // custom props in future...
  
  // breakpoints: {},
  // zIndices: {},
  // radii: {},
  // opacity: {},
  // borders: {},
  // colors: {},
  // sizes: {},
  // shadows: {},
  // space: {},
  // icons: {},
  // letterSpacings: {},
  // lineHeights: {},
  
  fontWeights: {
    ...theme.fontWeights,

    // hairline: number;
    // thin: number;
    // light: number;
    // normal: number,
    // medium: number;
    // semibold: number;
    // bold: number,
    // extrabold: number;
    // black: number;
  },
  // fonts: {},
};

export default customTheme;