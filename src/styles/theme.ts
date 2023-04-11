export default {
  colors: {
    text: {
      white: {
        100: '#FCFCFD',
        300: '#A9A9AA',
      },
      black: {
        100: '#181818',
        300: '#454545',
      },
    },
    habit: {
      red: { 600: '#662020', 500: '#DD2626' },
      green: { 600: '#22442C', 500: '#43AB65' },
      orange: { 600: '#4B3C1D', 500: '#F0B23A' },
    },
    dark: {
      500: '#181818',
      400: '#222222',
      300: '#303030',
      200: '#454545',
      100: '#5C5C5C',
    },
    light: {
      100: '#F2F2F2',
      200: '#E5E5E5',
      300: '#D8D8D8',
      400: '#CBCBCB',
      500: '#BEBEBE',
    },

    primary: {
      100: '#4447E2',
      500: '#1E1F73',
    },
    primaryGradient: `linear-gradient(138.83deg, #7175df 4.52%, #4f369f 104.14%)`,
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
