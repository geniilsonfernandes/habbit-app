import { screen } from '@testing-library/react'
import Button from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<Button />', () => {
  it('should render the Button', () => {
    renderWithTheme(<Button>My Button</Button>)

    const button = screen.getByRole('button', { name: /my button/i })

    expect(button).toBeInTheDocument()
  })

  it('should render the Button with loading', () => {
    renderWithTheme(<Button isLoding>My Button</Button>)

    const button = screen.getByRole('button', { name: /my button/i })
    const loader = screen.getByLabelText(/loading/i)

    expect(button).toBeInTheDocument()
    expect(loader).toBeInTheDocument()
  })

  it('should render the Button with disabled', () => {
    renderWithTheme(<Button isDisabled>My Button</Button>)

    const button = screen.getByRole('button', { name: /my button/i })

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('should render the Button with small size', () => {
    renderWithTheme(<Button size="small">My Button</Button>)

    const button = screen.getByRole('button', { name: /my button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ height: '42px' })
  })

  it('should render the Button with medium size and width full', () => {
    renderWithTheme(
      <Button size="medium" width="full">
        My Button
      </Button>,
    )

    const button = screen.getByRole('button', { name: /my button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ height: '52px' })
    expect(button).toHaveStyle({ width: '100%' })
  })

  it('should render the Button with large size', () => {
    renderWithTheme(<Button size="large">My Button</Button>)

    const button = screen.getByRole('button', { name: /my button/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ height: '62px' })
  })
})
