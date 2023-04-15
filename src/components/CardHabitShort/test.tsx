import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CardHabitShort, { CardHabitShortProps } from '.'
import theme from 'styles/theme'

const props: CardHabitShortProps = {
  id: '1',
  HabitName: 'HabitName',
  intervalTime: 'intervalTime',
  status: 'success',
  habbitColor: '#3b3102',
}

describe('<CardHabitShort />', () => {
  it('should render habit cart with its props', () => {
    renderWithTheme(<CardHabitShort {...props} />)

    expect(screen.getByText(props.HabitName)).toBeInTheDocument()
    expect(screen.getByText(props.intervalTime)).toBeInTheDocument()
    expect(screen.getByText(props.HabitName).parentElement).toHaveStyle({
      'border-left': `${props.habbitColor} 0.2rem solid`,
    })
    expect(screen.getByLabelText('Habit Actions')).toHaveStyle({
      'background-color': theme.colors.habit.green[600],
    })
  })

  it('should render habit cart with default color props', () => {
    renderWithTheme(
      <CardHabitShort
        HabitName="HabitName"
        intervalTime="intervalTime"
        id="1"
      />,
    )

    expect(screen.getByLabelText('Habit Actions')).toHaveStyle({
      'background-color': theme.colors.dark[200],
    })
  })

  it("should toggle habit cart's status", () => {
    renderWithTheme(<CardHabitShort {...props} />)

    expect(screen.getByLabelText('Habit Actions')).toHaveStyle({
      'background-color': theme.colors.habit.green[600],
    })
    screen.getByLabelText('Habit Actions').click()

    expect(screen.getByLabelText('Habit Actions')).toHaveStyle({
      'background-color': theme.colors.habit.orange[600],
    })

    screen.getByLabelText('Habit Actions').click()

    expect(screen.getByLabelText('Habit Actions')).toHaveStyle({
      'background-color': theme.colors.habit.red[600],
    })

    screen.getByLabelText('Habit Actions').click()

    expect(screen.getByLabelText('Habit Actions')).toHaveStyle({
      'background-color': theme.colors.dark[200],
    })
  })
})
