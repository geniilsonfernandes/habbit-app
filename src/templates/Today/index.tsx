import CalendarTab from 'components/CalendarTab'
import CardHabit from 'components/CardHabit'
import dayjs from 'dayjs'
import { useState } from 'react'
import Base from 'templates/Base'

import { useQuery } from '@tanstack/react-query'
import { HabitService } from 'services/habitService'
import * as S from './styles'

type HabitListProps = {
  date: Date
}
const HabitList = ({ date }: HabitListProps) => {
  const { data } = useQuery({
    queryKey: ['habit_unique', date],
    queryFn: () => HabitService.getByDate(date),
    staleTime: 0,
  })

  return (
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
            queryKey={['habit_unique', date]}
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
  )
}

const Today = () => {
  const [date, setDate] = useState(dayjs().toDate())

  return (
    <Base>
      <S.Wrapper>
        <S.Calendar aria-label={'Calendário de hábitos'} aria-hidden={false}>
          <CalendarTab onClickDate={(date) => setDate(date)} />
        </S.Calendar>
        <HabitList date={date} />
      </S.Wrapper>
    </Base>
  )
}

export default Today
