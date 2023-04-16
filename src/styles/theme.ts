export default {
  colors: {
    text: {
      white: {
        100: '#FCFCFD',
        200: '#E5E5E6',
        300: '#A9A9AA',
        400: '#6F6F71',
      },
      black: {
        100: '#181818',
        200: '#2E2E2E',
        300: '#454545',
        400: '#737373',
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
      100: '#7175DF',
      200: '#878BEC',
      300: '#9DA2F9',
      400: '#B4B8FF',
      500: '#CACDFF',
    },

    primaryGradient: {
      100: 'linear-gradient(138.83deg, #7175df 4.52%, #4f369f 104.14%)',
      200: 'linear-gradient(138.83deg, #878bec 4.52%, #623db6 104.14%)',
      300: 'linear-gradient(138.83deg, #9da2f9 4.52%, #7c52d3 104.14%)',
      400: 'linear-gradient(138.83deg, #b4b8ff 4.52%, #925ee7 104.14%)',
      500: 'linear-gradient(138.83deg, #cacdff 4.52%, #a463f0 104.14%)',
    },

    // schemes: {
    //   primary: {
    //     base: {
    //       100: '#7175DF',
    //       200: '#878BEC',
    //       300: '#9DA2F9',
    //       400: '#B4B8FF',
    //       500: '#CACDFF',
    //     },
    //     baseGradient: {
    //       100: 'linear-gradient(138.83deg, #7175df 4.52%, #4f369f 104.14%)',
    //       200: 'linear-gradient(138.83deg, #878bec 4.52%, #623db6 104.14%)',
    //       300: 'linear-gradient(138.83deg, #9da2f9 4.52%, #7c52d3 104.14%)',
    //       400: 'linear-gradient(138.83deg, #b4b8ff 4.52%, #925ee7 104.14%)',
    //       500: 'linear-gradient(138.83deg, #cacdff 4.52%, #a463f0 104.14%)',
    //     },
    //   },
    //   secondary: {
    //     base: {
    //       100: '#5BB385',
    //       200: '#71CFA6',
    //       300: '#87D8C7',
    //       400: '#9DDFE8',
    //       500: '#B3E6E9',
    //     },
    //     baseGradient: {
    //       100: 'linear-gradient(138.83deg, #5BB385 4.52%, #42794D 104.14%)',
    //       200: 'linear-gradient(138.83deg, #71CFA6 4.52%, #4D9366 104.14%)',
    //       300: 'linear-gradient(138.83deg, #87D8C7 4.52%, #5CAE80 104.14%)',
    //       400: 'linear-gradient(138.83deg, #9DDFE8 4.52%, #78C6BB 104.14%)',
    //       500: 'linear-gradient(138.83deg, #B3E6E9 4.52%, #95D5D7 104.14%)',
    //     },
    //   },
    //   dark: {
    //     base: {
    //       100: '#323234',
    //       200: '#3F3F41',
    //       300: '#4D4D4F',
    //       400: '#5B5B5D',
    //       500: '#69696B',
    //     },
    //     baseGradient: {
    //       100: 'linear-gradient(138.83deg, #323234 4.52%, #1F1F21 104.14%)',
    //       200: 'linear-gradient(138.83deg, #3F3F41 4.52%, #2C2C2E 104.14%)',
    //       300: 'linear-gradient(138.83deg, #4D4D4F 4.52%, #3A3A3C 104.14%)',
    //       400: 'linear-gradient(138.83deg, #5B5B5D 4.52%, #48484A 104.14%)',
    //       500: 'linear-gradient(138.83deg, #69696B 4.52%, #565658 104.14%)',
    //     },
    //   },
    // },
  },
  transitions: {
    ease_in_out: 'all 0.3s ease-in-out',
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
