import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CardHabit from '.'

const props = {
  habbitName: 'Habit Name',
  intervalTime: 'Interval Time',
  habbitColor: '#A9A9AA',
  habits: [1, 2, 3, 4, 5, 6, 7, 8],
}

jest.mock('components/CheckHabit', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CheckHabit" />
    },
  }
})

describe('<CardHabit />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardHabit {...props} />)

    expect(screen.getByText(props.habbitName)).toBeInTheDocument()
    expect(screen.getByText(props.intervalTime)).toBeInTheDocument()
  })

  it('should render the CheckHabit', () => {
    renderWithTheme(<CardHabit {...props} />)

    expect(screen.getAllByTestId('Mock CheckHabit')).toHaveLength(8)
  })

  it('should render the card with dafault values', () => {
    renderWithTheme(<CardHabit />)

    expect(screen.getByText('-')).toBeInTheDocument()
  })
})
