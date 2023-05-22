import { screen } from '@testing-library/react'
import YearLineChart from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<YearLineChart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<YearLineChart />)

    expect(
      screen.getByRole('heading', { name: /YearLineChart/i }),
    ).toBeInTheDocument()
  })
})
