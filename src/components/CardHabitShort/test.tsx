import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CardHabitShort from '.'

describe('<CardHabitShort />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardHabitShort />)

    expect(screen.getByRole('heading', { name: 'ew' })).toBeInTheDocument()
  })
})
