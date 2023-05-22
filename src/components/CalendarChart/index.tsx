import useYearCalendar from 'hook/useYearCalendar'
import * as S from './styles'
import dayjs from 'dayjs'
import HabitRecord from 'services/entities/HabitRecord'

type CalendarChartProps = {
  year?: number
  progress?: HabitRecord[]
  intervalTime?: string[]
}
const CalendarChart = ({
  year = dayjs().year(),
  progress,
  intervalTime = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
}: CalendarChartProps) => {
  const { yearWeek } = useYearCalendar(year)

  const findDayProgress = (date: Date) => {
    const matchDay = progress?.find((day) =>
      dayjs(day.date).isSame(date, 'day'),
    )

    return matchDay?.progress || 'default'
  }

  return (
    <S.History>
      <S.HistoryLegendTop>
        <span></span>
        <ul>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <li key={day}>
              <span>{day}</span>
            </li>
          ))}
        </ul>
      </S.HistoryLegendTop>

      <S.HistoryWeekWrapper>
        <S.HistoryWeekLegendGrid>
          {yearWeek[6].map((day, i, days) => {
            const month = dayjs(day).month()
            const prevMonth = dayjs(days[i - 1]).month()

            if (month !== prevMonth) {
              return <span key={i}>{dayjs(day).format('MMMM')}</span>
            }
            return <span key={i}></span>
          })}
        </S.HistoryWeekLegendGrid>
        <S.DaysGrid>
          {yearWeek.map((week, i) => (
            <S.Column key={i}>
              {week.map((day, i) => (
                <S.Day
                  key={i}
                  status={findDayProgress(day)}
                  aria-label={`Habit ${day} - ${findDayProgress(day)}`}
                  available={intervalTime.includes(
                    dayjs(day).format('ddd').toUpperCase(),
                  )}
                >
                  {dayjs(day).date()}
                </S.Day>
              ))}
            </S.Column>
          ))}
        </S.DaysGrid>
      </S.HistoryWeekWrapper>
    </S.History>
  )
}

export default CalendarChart
