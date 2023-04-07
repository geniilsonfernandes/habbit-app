import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
export const parameters = {
  backgrounds: {
    default: 'habit-dark',
    values: [
      {
        name: 'habit-light',
        value: '#fff',
      },
      {
        name: 'habit-dark',
        value: '#181818',
      },
    ],
  },
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
