import { screen } from '@testing-library/react'

import DateCheck from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<DateCheck />', () => {
  it('should render the heading', () => {
    renderWithTheme(<DateCheck />)

    expect(
      screen.getByRole('heading', { name: /DateCheck/i }),
    ).toBeInTheDocument()
  })
})
