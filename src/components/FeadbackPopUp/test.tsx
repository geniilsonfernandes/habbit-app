import { screen } from '@testing-library/react'
import FeadbackPopUp from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<FeadbackPopUp />', () => {
  it('should render the message and type sucess as default', () => {
    renderWithTheme(
      <FeadbackPopUp
        message="Habit created successfully"
        onClose={() => console.log("I'm closed")}
      />,
    )

    const iconSucess = screen.getByLabelText(/success/i)

    expect(iconSucess).toBeInTheDocument()
    expect(screen.getByText(/Habit created successfully/i)).toBeInTheDocument()
  })

  it('should render the message and type error', () => {
    renderWithTheme(
      <FeadbackPopUp
        message="Habit can't be created"
        type="error"
        onClose={() => console.log("I'm closed")}
      />,
    )

    const iconError = screen.getByLabelText(/error/i)

    expect(screen.getByText(/Habit can't be created/i)).toBeInTheDocument()

    expect(iconError).toBeInTheDocument()
  })

  it('should click and button back', () => {
    const onClose = jest.fn()

    renderWithTheme(
      <FeadbackPopUp
        message="Habit can't be created"
        type="error"
        onClose={onClose}
      />,
    )

    const button = screen.getByRole('button', { name: /close/i })

    button.click()

    expect(onClose).toHaveBeenCalled()
  })
})
