import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/renderWithTheme'
import CheckHabit from '.'

describe('<CheckHabit />', () => {
  it('should render the heading', () => {
    renderWithTheme(
    <CheckHabit />)

    expect(
      screen.getByRole('heading', { name: /CheckHabit/i })
    ).toBeInTheDocument()
  })
})
