import { act, screen } from '@testing-library/react'
import CheckHabit, { CheckHabitProps } from '.'
import theme from '../../styles/theme'
import renderWithTheme from '../../utils/renderWithTheme'

const props: CheckHabitProps = {
  id: '3',
  day: 'Qua',
  date: 16,
  status: 'delayed',
}

describe('<CheckHabit />', () => {
  it('should show day and date when have prop', () => {
    renderWithTheme(<CheckHabit {...props} />)

    expect(screen.getByText(props.day)).toHaveTextContent('Qua')
    expect(screen.getByText(props.date)).toBeInTheDocument()
  })

  it('should have background color green', () => {
    renderWithTheme(<CheckHabit {...props} status="success" />)

    const wrapperDate = screen.getByText(props.date)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.green[600],
    })
  })
  it('should call function when clicked', () => {
    const onClick = jest.fn()

    renderWithTheme(
      <CheckHabit {...props} onClick={onClick} status="success" />,
    )

    const wrapperDate = screen.getByText(props.date)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.green[600],
    })

    act(() => {
      wrapperDate.click()
    })

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.orange[600],
    })

    expect(onClick).toBeCalledWith('delayed')
  })

  it('should have background color orange', () => {
    renderWithTheme(<CheckHabit {...props} status="delayed" />)

    const wrapperDate = screen.getByText(props.date)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.orange[600],
    })
  })

  it('should have background all color possibles', () => {
    renderWithTheme(<CheckHabit date={16} day="seg" id="1" />)

    const wrapperDate = screen.getByText(16)

    act(() => {
      wrapperDate.click()
    })

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.green[600],
    })

    act(() => {
      wrapperDate.click()
    })

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.orange[600],
    })

    act(() => {
      wrapperDate.click()
    })

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.red[600],
    })

    act(() => {
      wrapperDate.click()
    })

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.dark[200],
    })

    act(() => {
      wrapperDate.click()
    })
  })
})
