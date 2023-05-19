import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import CardHabit from '.'

jest.mock('components/CheckHabit', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CheckHabit" />
    },
  }
})

describe('<CardHabit />', () => {
  it('should render the eight cards CheckHabit', () => {
    renderWithTheme(
      <CardHabit
        habbitColor="#FF0000"
        habitName="Teste"
        intervalTime="Diário"
        progress={Array(8).fill({
          date: new Date(),
          progress: 'not_yet',
          id: null,
          date_view: {
            day: '01',
            nm_day: 'Segunda',
            month: '01',
          },
        })}
        id="jksfksj"
      />,
    )

    expect(screen.getAllByTestId('Mock CheckHabit')).toHaveLength(8)
  })

  // it('should render card habit days version', () => {
  //   renderWithTheme(<CardHabit {...props} version="today" />)

  //   expect(screen.getByLabelText('Habit Actions')).toBeInTheDocument()
  //   expect(screen.getByText(MockData.habitName)).toBeInTheDocument()
  //   expect(screen.getByText(MockData.intervalTime)).toBeInTheDocument()
  //   expect(
  //     screen.getByText(MockData.habitName).previousElementSibling,
  //   ).toHaveStyle({
  //     backgroundColor: MockData.habbitColor,
  //   })
  // })

  // it("should render card habit today version and not render 'Habit Actions'", () => {
  //   renderWithTheme(<CardHabit {...props} version="days" />)

  //   expect(screen.queryByLabelText('Habit Actions')).not.toBeInTheDocument()
  // })
})
