import { ThemeProvider } from 'styled-components'
import { RenderResult, render } from '@testing-library/react'
import theme from '../styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children} </ThemeProvider>)
}

export default renderWithTheme
