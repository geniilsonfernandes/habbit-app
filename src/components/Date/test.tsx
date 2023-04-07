import { render, screen } from '@testing-library/react'

import Date from '.'

describe('<Date />', () => {
  it('should render the heading', () => {
    render(<Date />)

    expect(
      screen.getByRole('heading', { name: /Date/i })
    ).toBeInTheDocument()
  })
})
