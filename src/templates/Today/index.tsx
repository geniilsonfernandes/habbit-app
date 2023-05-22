import CalendarTab from 'components/CalendarTab'
import CardHabit from 'components/CardHabit'
import dayjs from 'dayjs'
import { useState } from 'react'
import Base from 'templates/Base'

import { useQuery } from '@tanstack/react-query'
import { HabitService } from 'services/habitService'
import * as S from './styles'

const Today = () => {
  const [date, setDate] = useState(dayjs().toDate())
  const { data, isLoading } = useQuery(
    ['habit_date', date.toDateString()],
    () => HabitService.getByDate(date),
    {
      enabled: !!date,
    },
  )

  const handleToggleDate = (date: Date) => {
    setDate(dayjs(date).toDate())
  }

  console.log(data)

  return (
    <Base isLoading={isLoading}>
      <S.Wrapper>
        <S.Calendar aria-label={'Calendário de hábitos'} aria-hidden={false}>
          <CalendarTab onClickDate={(date) => handleToggleDate(date)} />
        </S.Calendar>
        <S.HabitList>
          {data &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.map((item: any) => (
              <CardHabit
                key={item.id}
                id={item.id}
                habbitColor={item.color}
                habitName={item.name}
                intervalTime={item.interval}
                progress={[]}
                onClick={() => console.log('click')}
                version="today"
                today={{
                  id: item?.progress_day?.id || null,
                  status: item.progress_day.progress,
                  date: item.progress_day.date,
                }}
              />
            ))}
        </S.HabitList>
      </S.Wrapper>
    </Base>
  )
}

export default Today
