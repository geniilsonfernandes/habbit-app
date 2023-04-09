import { screen } from '@testing-library/react'
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
  it('show show day and date when props are present', () => {
    renderWithTheme(<CheckHabit {...props} />)

    expect(screen.getByText(props.day)).toHaveTextContent('Qua')
    expect(screen.getByText(props.date)).toBeInTheDocument()
  })

  it('should Background color be green when status is success', () => {
    renderWithTheme(<CheckHabit {...props} status="success" />)

    const wrapperDate = screen.getByText(props.date)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.green[600],
    })
  })
  it('should calls function when clicked and toggles colors', () => {
    const onClick = jest.fn()

    renderWithTheme(
      <CheckHabit {...props} onClick={onClick} status="success" />,
    )

    const wrapperDate = screen.getByText(props.date)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.green[600],
    })

    wrapperDate.click()

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.orange[600],
    })

    expect(onClick).toBeCalledWith('delayed')

    wrapperDate.click()

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.red[600],
    })

    expect(onClick).toBeCalledWith('failed')
  })

  it('should be background color orange when status is delayed', () => {
    //  renderizar o componente com o estado atrasado (delayed)
    renderWithTheme(<CheckHabit {...props} status="delayed" />)

    const wrapperDate = screen.getByText(props.date)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.habit.orange[600],
    })
  })

  it('should enders with invalid or missing status prop', () => {
    renderWithTheme(<CheckHabit date={10} day="mon" id="2" />)

    const wrapperDate = screen.getByText(10)

    expect(wrapperDate).toHaveStyle({
      backgroundColor: theme.colors.dark[200],
    })
  })
})
