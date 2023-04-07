import { render, screen } from '@testing-library/react'

import HabbitCard from '.'

describe('<HabbitCard />', () => {
  it('should render the heading', () => {
    render(<HabbitCard />)

    expect(
      screen.getByRole('heading', { name: /HabbitCard/i })
    ).toBeInTheDocument()
  })
})
