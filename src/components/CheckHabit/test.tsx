import { act, screen } from '@testing-library/react'
import CheckHabit from '.'
import theme from '../../styles/theme'
import renderWithTheme from '../../utils/renderWithTheme'

const props = {
  day: 'day',
  date: 2,
}

describe('<CheckHabit />', () => {
  it('should show day and date when have prop', () => {
    renderWithTheme(<CheckHabit {...props} />)

    expect(screen.getByText(props.day)).toHaveTextContent('day')
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

    expect(onClick).toBeCalledWith('waiting')
  })
})
