import { screen } from '@testing-library/react'
import HeadLabel from '.'
import renderWithTheme from '../../utils/renderWithTheme'
import theme from '../../styles/theme'

describe('<HeadLabel />', () => {
  it('should render the heading with text', () => {
    renderWithTheme(<HeadLabel title="title" />)

    expect(screen.getByText('title')).toBeInTheDocument()
  })

  it('should render the heading with text and barColor', () => {
    renderWithTheme(<HeadLabel title="title" barColor="red" />)

    const heading = screen.getByText('title')

    expect(heading.previousElementSibling).toHaveStyle({
      'background-color': 'red',
    })
  })

  it('should render the heading with text and variant dark', () => {
    renderWithTheme(<HeadLabel title="title" variant="dark" />)

    const heading = screen.getByText('title')

    expect(heading).toHaveStyle({
      color: theme.colors.text[100],
    })
  })

  it('should render the heading with text and variant light', () => {
    renderWithTheme(<HeadLabel title="title" variant="light" />)

    const heading = screen.getByText('title')

    expect(heading).toHaveStyle({
      color: theme.colors.text[900],
    })
  })

  it('should render the heading with text and variant light and barColor', () => {
    renderWithTheme(<HeadLabel title="title" variant="light" barColor="red" />)

    const heading = screen.getByText('title')

    expect(heading).toHaveStyle({
      color: theme.colors.text[900],
    })
  })

  it('should render the heading with text and default bar color', () => {
    renderWithTheme(<HeadLabel title="title" />)

    const heading = screen.getByText('title')

    expect(heading.previousElementSibling).toHaveStyle({
      'background-color': '#A9A9AA',
    })
  })
})
