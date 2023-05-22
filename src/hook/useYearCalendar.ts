import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

interface YearCalendar {
  calendar: Date[][]
  yearWeek: Array<Date[]>
  yearMonth: Record<number | string, Date[]>
}

const useYearCalendar = (initialYear: number): YearCalendar => {
  const yearDays: Date[] = []
  const yearMonth: Record<number | string, Date[]> = {}
  const yearWeek: Array<Date[]> = [[], [], [], [], [], [], []]

  let day = dayjs().year(initialYear).month(0).date(1)

  while (day.year() === initialYear) {
    const monthNumber = day.month()
    const dayNumber = day.day()

    if (!yearMonth[monthNumber]) {
      yearMonth[monthNumber] = []
    }

    if (!yearWeek[dayNumber]) {
      yearWeek[dayNumber] = []
    }

    yearDays.push(day.toDate())
    yearWeek[dayNumber].push(day.toDate())
    yearMonth[monthNumber].push(day.toDate())

    day = day.add(1, 'day')
  }

  const calendar = Array.from({ length: 53 }).map(() => {
    const week = Array.from({ length: 7 })
    return week
  }) as Date[][]

  yearDays.forEach((day) => {
    const dayNumber = dayjs(day).day()
    const weekNumber = dayjs(day).week()
    const monthNumber = dayjs(day).month()
    if (monthNumber === 11 && weekNumber === 1) {
      calendar[calendar.length - 1][dayNumber] = day

      return
    }

    calendar[weekNumber - 1][dayNumber] = day
  })

  return { calendar, yearWeek, yearMonth }
}

export default useYearCalendar
