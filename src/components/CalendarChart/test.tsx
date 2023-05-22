import { screen } from '@testing-library/react'
import CalendarChart from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<CalendarChart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CalendarChart />)

    expect(
      screen.getByRole('heading', { name: /CalendarChart/i }),
    ).toBeInTheDocument()
  })
})
