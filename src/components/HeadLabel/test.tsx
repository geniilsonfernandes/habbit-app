import { screen } from '@testing-library/react'
import HeadLabel from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<HeadLabel />', () => {
  it('should render the heading', () => {
    renderWithTheme(<HeadLabel title="title" />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
  })
})
