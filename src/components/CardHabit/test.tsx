import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CardHabit from '.'

describe('<CardHabit />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardHabit />)

    expect(
      screen.getByRole('heading', { name: /CardHabit/i }),
    ).toBeInTheDocument()
  })
})
