import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<Input />', () => {
  it('should render the input with placeholder and helper text', () => {
    renderWithTheme(
      <Input placeholder="Type your text" helperText="Helper text" />,
    )

    expect(screen.getByPlaceholderText(/type your text/i)).toBeInTheDocument()
    expect(screen.getByText(/helper text/i)).toBeInTheDocument()
  })

  it('should render the input with label', () => {
    renderWithTheme(<Input label="Label" />)

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should render the input with error', () => {
    renderWithTheme(<Input error helperText="Error message" />)

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
  })

  it('should render the input with success', () => {
    renderWithTheme(<Input success helperText="Success message" />)

    expect(screen.getByText(/success message/i)).toBeInTheDocument()
  })

  it('should render the input with disabled', () => {
    renderWithTheme(<Input placeholder="Type your text" disabled />)
    const input = screen.getByPlaceholderText('Type your text')

    expect(input).toBeDisabled()
  })

  describe('type password', () => {
    it('should render the input with password type and show password', async () => {
      renderWithTheme(
        <Input type="password" placeholder="type your password" />,
      )
      const input = screen.getByPlaceholderText('type your password')

      expect(input).toHaveAttribute('type', 'password')

      const button = screen.getByLabelText('show password')

      expect(button).toBeInTheDocument()

      await userEvent.click(button)

      expect(input).toHaveAttribute('type', 'text')

      await userEvent.click(button)

      expect(input).toHaveAttribute('type', 'password')
    })

    it("should show the button recovery password when it's passed and call fn", async () => {
      const fn = jest.fn()
      renderWithTheme(
        <Input
          type="password"
          placeholder="type your password"
          onRecoveryPassword={fn}
        />,
      )

      expect(screen.getByText(/esqueceu a senha?/i)).toBeInTheDocument()

      await userEvent.click(screen.getByText(/esqueceu a senha?/i))

      expect(fn).toHaveBeenCalledTimes(1)
    })
  })
})
