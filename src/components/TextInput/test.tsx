import { screen } from '@testing-library/react'
import TextInput from '.'
import userEvent from '@testing-library/user-event'
import renderWithTheme from '../../utils/renderWithTheme'
import theme from 'styles/theme'

describe('<TextInput />', () => {
  it('should render the input with placeholder and helper text', () => {
    renderWithTheme(
      <TextInput placeholder="Type your text" helperText="Helper text" />,
    )

    expect(screen.getByPlaceholderText(/type your text/i)).toBeInTheDocument()
    expect(screen.getByText(/helper text/i)).toBeInTheDocument()
  })

  it('should render the input with success', () => {
    renderWithTheme(
      <TextInput
        success
        placeholder="Type your text"
        helperText="Helper text"
      />,
    )

    expect(screen.getByPlaceholderText(/type your text/i)).toHaveStyle({
      borderColor: theme.colors.success[100],
    })

    expect(screen.getByText(/helper text/i)).toHaveStyle({
      color: theme.colors.success[100],
    })
  })

  it('should render the input with error', () => {
    renderWithTheme(
      <TextInput error placeholder="Type your text" helperText="Helper text" />,
    )

    expect(screen.getByPlaceholderText(/type your text/i)).toHaveStyle({
      borderColor: theme.colors.error[100],
    })
    expect(screen.getByText(/helper text/i)).toHaveStyle({
      color: theme.colors.error[100],
    })
  })

  it('should render the input with disabled', () => {
    renderWithTheme(
      <TextInput
        disabled
        placeholder="Type your text"
        helperText="Helper text"
      />,
    )

    expect(screen.getByPlaceholderText(/type your text/i)).toHaveStyle({
      cursor: 'not-allowed',
      opacity: 0.5,
    })
  })

  it('should render the input with label', () => {
    renderWithTheme(
      <TextInput
        label="Label"
        placeholder="Type your text"
        helperText="Helper text"
      />,
    )

    expect(screen.getByText(/label/i)).toBeInTheDocument()
  })

  it('should render the input with id', () => {
    renderWithTheme(
      <TextInput
        id="input"
        label="Label"
        placeholder="Type your text"
        helperText="Helper text"
      />,
    )

    expect(screen.getByPlaceholderText(/type your text/i)).toHaveAttribute(
      'id',
      'input',
    )
  })

  it('should call function whwn user type on input', async () => {
    const fn = jest.fn()

    renderWithTheme(
      <TextInput
        label="Label"
        placeholder="Type your text"
        helperText="Helper text"
        id="input_10"
        onChange={fn}
      />,
    )

    const label = screen.getByText(/label/i)
    const input = screen.getByPlaceholderText(/type your text/i)

    await userEvent.click(label)

    expect(input).toHaveFocus()

    const text = 'Type your text'

    await userEvent.type(input, text)

    expect(fn).toHaveBeenCalledTimes(text.length)
  })
})
