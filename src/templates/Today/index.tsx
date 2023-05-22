import CalendarTab from 'components/CalendarTab'
import CardHabit from 'components/CardHabit'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import Base from 'templates/Base'

import { useQuery } from '@tanstack/react-query'
import { HabitService } from 'services/habitService'
import * as S from './styles'

const Today = () => {
  const [date, setDate] = useState(dayjs().toDate())
  const [habit, setHabit] = useState([])

  useEffect(() => {
    const getHabit = async () => {
      const data = await HabitService.getByDate(date)
      setHabit(data)
    }
    getHabit()
  }, [date])

  return (
    <Base>
      <S.Wrapper>
        <S.Calendar aria-label={'Calendário de hábitos'} aria-hidden={false}>
          <CalendarTab onClickDate={(date) => setDate(date)} />
        </S.Calendar>
        <S.HabitList>
          {habit &&
            habit.map((item: any) => (
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
