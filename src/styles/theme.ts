const PROJECT_CONFIG = {
  transitions: {
    ease_in_out: 'all 0.1s ease-in-out',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    slow_start: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    slow_end: 'all 0.5s cubic-bezier(0.43, 0, 0.72, 1)',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  viewPorts: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
    large: '1440px',
  },
  body: {
    width: '592px',
  },
  radius: {
    md: '8px',
    sm: '4px',
  },
  font: {
    family: "'Rubik', sans-serif",
    normal: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
} as const

const DARK_THEME = {
  text: {
    100: '#FCFCFD',
    200: '#F2F2F2',
    300: '#D8D8D8',
    400: '#BEBEBE',
    500: '#A2A2A2',
    600: '#8C8C8C',
    700: '#6E6E6E',
    800: '#4F4F4F',
    900: '#333333',
  },
  habit: {
    red: { 600: '#662020', 500: '#DD2626' },
    green: { 600: '#22442C', 500: '#43AB65' },
    orange: { 600: '#4B3C1D', 500: '#F0B23A' },
    default: { 600: '#2C2C2C', 500: '#484848' },
  },
  background: {
    900: '#181818',
    800: '#1E1E1E',
    700: '#2C2C2C',
    600: '#3A3A3A',
    500: '#484848',
    400: '#6E6E6E',
    300: '#8C8C8C',
    200: '#B4B4B4',
    100: '#D2D2D2',
    transparent: {
      900: 'rgba(255, 255, 255, 0.1)',
      800: 'rgba(255, 255, 255, 0.2)',
      700: 'rgba(255, 255, 255, 0.3)',
      600: 'rgba(255, 255, 255, 0.4)',
      500: 'rgba(255, 255, 255, 0.5)',
      400: 'rgba(255, 255, 255, 0.6)',
      300: 'rgba(255, 255, 255, 0.7)',
      200: 'rgba(255, 255, 255, 0.8)',
      100: 'rgba(255, 255, 255, 0.9)',
    },
  },
  primary: {
    100: '#7175DF',
    200: '#878BEC',
    300: '#9DA2F9',
    400: '#B4B8FF',
    500: '#CACDFF',
    gradient: {
      100: 'linear-gradient(138.83deg, #7175df 4.52%, #4f369f 104.14%)',
      200: 'linear-gradient(138.83deg, #878bec 4.52%, #623db6 104.14%)',
      300: 'linear-gradient(138.83deg, #9da2f9 4.52%, #7c52d3 104.14%)',
      400: 'linear-gradient(138.83deg, #b4b8ff 4.52%, #925ee7 104.14%)',
      500: 'linear-gradient(138.83deg, #cacdff 4.52%, #a463f0 104.14%)',
      600: 'linear-gradient(138.83deg,#000000 4.52%, #120e46  104.14%)',
    },
  },
  secondary: {
    base: {
      100: '#5BB385',
      200: '#71CFA6',
      300: '#87D8C7',
      400: '#9DDFE8',
      500: '#B3E6E9',
      gradient: {
        100: 'linear-gradient(138.83deg, #5BB385 4.52%, #42794D 104.14%)',
        200: 'linear-gradient(138.83deg, #71CFA6 4.52%, #4D9366 104.14%)',
        300: 'linear-gradient(138.83deg, #87D8C7 4.52%, #5CAE80 104.14%)',
        400: 'linear-gradient(138.83deg, #9DDFE8 4.52%, #78C6BB 104.14%)',
        500: 'linear-gradient(138.83deg, #B3E6E9 4.52%, #95D5D7 104.14%)',
      },
    },
  },
  error: {
    100: '#DD2626',
    200: '#662020',
  },
  success: {
    100: '#43AB65',
    200: '#22442C',
  },
  warning: {
    100: '#F0B23A',
    200: '#4B3C1D',
  },
} as const

const LIGHT_THEME = {
  text: {
    100: '#333333',
    200: '#4F4F4F',
    300: '#6E6E6E',
    400: '#8C8C8C',
    500: '#A2A2A2',
    600: '#BEBEBE',
    700: '#D8D8D8',
    800: '#F2F2F2',
    900: '#FCFCFD',
  },
  habit: {
    red: { 500: '#DD2626', 600: '#662020' },
    green: { 500: '#43AB65', 600: '#22442C' },
    orange: { 500: '#F0B23A', 600: '#4B3C1D' },
    default: { 500: '#484848', 600: '#3A3A3A' },
  },
  background: {
    100: '#FCFCFD',
    200: '#F2F2F2',
    300: '#D8D8D8',
    400: '#B4B4B4',
    500: '#8C8C8C',
    600: '#eeeeee',
    700: '#484848',
    800: '#333333',
    900: '#181818',
  },
  primary: {
    100: '#7175DF',
    200: '#878BEC',
    300: '#9DA2F9',
    400: '#B4B8FF',
    500: '#CACDFF',
    gradient: {
      100: 'linear-gradient(138.83deg, #7175df 4.52%, #4f369f 104.14%)',
      200: 'linear-gradient(138.83deg, #878bec 4.52%, #623db6 104.14%)',
      300: 'linear-gradient(138.83deg, #9da2f9 4.52%, #7c52d3 104.14%)',
      400: 'linear-gradient(138.83deg, #b4b8ff 4.52%, #925ee7 104.14%)',
      500: 'linear-gradient(138.83deg, #cacdff 4.52%, #a463f0 104.14%)',
    },
  },
  secondary: {
    base: {
      100: '#5BB385',
      200: '#71CFA6',
      300: '#87D8C7',
      400: '#9DDFE8',
      500: '#B3E6E9',
      gradient: {
        100: 'linear-gradient(138.83deg, #5BB385 4.52%, #42794D 104.14%)',
        200: 'linear-gradient(138.83deg, #71CFA6 4.52%, #4D9366 104.14%)',
        300: 'linear-gradient(138.83deg, #87D8C7 4.52%, #5CAE80 104.14%)',
        400: 'linear-gradient(138.83deg, #9DDFE8 4.52%, #78C6BB 104.14%)',
        500: 'linear-gradient(138.83deg, #B3E6E9 4.52%, #95D5D7 104.14%)',
      },
    },
  },
  error: {
    100: '#DD2626',
    200: '#662020',
  },
  success: {
    100: '#43AB65',
    200: '#22442C',
  },
  warning: {
    100: '#F0B23A',
    200: '#4B3C1D',
  },
} as const

export const LIGHT = {
  colors: LIGHT_THEME,
  ...PROJECT_CONFIG,
} as const

export const DARK = {
  colors: DARK_THEME,
  ...PROJECT_CONFIG,
} as const

export default {
  colors: DARK_THEME,
  ...PROJECT_CONFIG,
} as const
