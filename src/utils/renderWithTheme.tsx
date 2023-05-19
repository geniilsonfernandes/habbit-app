import { ThemeProvider } from 'styled-components'
import { RenderResult, render } from '@testing-library/react'
import theme from '../styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'services/store/queryClient'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    </QueryClientProvider>,
  )
}

export default renderWithTheme
