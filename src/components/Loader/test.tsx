import { screen } from '@testing-library/react'
import Loader from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<Loader />', () => {
  it('should render the loader', () => {
    renderWithTheme(<Loader />)

    const loader = screen.getByLabelText(/loading/i)

    expect(loader).toBeInTheDocument()
    expect(loader).toMatchSnapshot()
  })

  it('should render the loader with size small', () => {
    renderWithTheme(<Loader size="small" />)

    const loader = screen.getByLabelText(/loading/i)

    expect(loader).toBeInTheDocument()
    expect(loader).toHaveStyle({ width: '2rem' })
  })

  it('should render the loader with size medium', () => {
    renderWithTheme(<Loader size="medium" />)

    const loader = screen.getByLabelText(/loading/i)

    expect(loader).toBeInTheDocument()
    expect(loader).toHaveStyle({ width: '2rem' })
  })

  it('should render the loader with size large', () => {
    renderWithTheme(<Loader size="large" />)

    const loader = screen.getByLabelText(/loading/i)

    expect(loader).toBeInTheDocument()
    expect(loader).toHaveStyle({ width: '3rem' })
  })
})
