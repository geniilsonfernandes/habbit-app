import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CardHabit from '.'
import { MockData } from './stories'

const props = MockData

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

    expect(screen.getByText(props.habitName)).toBeInTheDocument()
    expect(screen.getByText(props.intervalTime)).toBeInTheDocument()
  })

  it('should render the eight cards CheckHabit', () => {
    renderWithTheme(<CardHabit {...props} />)

    expect(screen.getAllByTestId('Mock CheckHabit')).toHaveLength(8)
  })

  it('should render habit name and interval correctly', () => {
    renderWithTheme(<CardHabit {...props} />)

    expect(screen.getByText(props.habitName)).toBeInTheDocument()
    expect(screen.getByText(props.intervalTime)).toBeInTheDocument()
  })

  it('should render the message "Ainda não habitos cadastrados" when not have data', () => {
    renderWithTheme(
      <CardHabit
        id={props.id}
        habitName={props.habitName}
        intervalTime={props.intervalTime}
        habbitColor={props.habbitColor}
      />,
    )

    expect(
      screen.getByText('Ainda não habitos cadastrados'),
    ).toBeInTheDocument()
  })
})
