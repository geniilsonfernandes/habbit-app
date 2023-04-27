import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CreateHabit from '.'
import userEvent from '@testing-library/user-event'

describe('<CreateHabit />', () => {
  it('should render form to create habit and write a habit ', async () => {
    renderWithTheme(<CreateHabit />)

    const input = screen.getByPlaceholderText(/reading the book/i)

    expect(input).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /create habit/i })

    expect(button).toBeInTheDocument()

    await userEvent.type(input, 'Reading the book')

    expect(input).toHaveValue('Reading the book')
  })

  it('should render form to create habit and select a category and frequency sun and mon', async () => {
    renderWithTheme(<CreateHabit />)

    const categorylist = screen.getAllByLabelText(/category/i)

    expect(categorylist).toHaveLength(6)

    await userEvent.click(categorylist[0])

    expect(categorylist[0]).toHaveAttribute('aria-checked', 'true')

    const frequencylist = screen.getAllByLabelText(/day/i)

    expect(frequencylist).toHaveLength(7)

    await userEvent.click(frequencylist[0])
    await userEvent.click(frequencylist[1])
    await userEvent.click(frequencylist[1])

    expect(frequencylist[0]).toHaveAttribute('aria-checked', 'true')
    expect(frequencylist[1]).toHaveAttribute('aria-checked', 'false')
  })

  it('should show error message when empty values', async () => {
    renderWithTheme(<CreateHabit />)

    const button = screen.getByRole('button', { name: /create habit/i })

    await userEvent.click(button)

    const inputHabitMessage = screen.getByText(/please enter a habit name/i)

    expect(inputHabitMessage).toBeInTheDocument()

    const inputCategoryMessage = screen.getByText(/please select a category/i)

    expect(inputCategoryMessage).toBeInTheDocument()

    const inputFrequencyMessage = screen.getByText(/please select a frequency/i)

    expect(inputFrequencyMessage).toBeInTheDocument()
  })

  it('should submit values', async () => {
    renderWithTheme(<CreateHabit />)

    const input = screen.getByPlaceholderText(/reading the book/i)

    await userEvent.type(input, 'Reading the book')

    const categorylist = screen.getAllByLabelText(/category/i)

    await userEvent.click(categorylist[0])

    const frequencylist = screen.getAllByLabelText(/day/i)

    await userEvent.click(frequencylist[0])

    const button = screen.getByRole('button', { name: /create habit/i })

    await userEvent.click(button)
  })
})
