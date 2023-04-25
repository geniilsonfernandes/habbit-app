import React from 'react'
import Base from 'templates/Base'
import * as S from './styles'
import CardHabit from 'components/CardHabit'
import { CardHabitProps } from 'components/CardHabit'

const data = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  habitName: 'Fazer exercícios',
  intervalTime: '2 dias por semana',
  habbitColor: '#F2C94C',
  habbitLastEightDays: Array.from({ length: 8 }, (_, index) => ({
    id: index.toString(),
    day: 'Seg',
    date: 14,
    status: 'success',
  })),
})) as CardHabitProps[]

const Home = () => {
  return (
    <Base>
      <S.Habits>
        {data.map((item) => (
          <CardHabit key={item.id} {...item} />
        ))}
      </S.Habits>
    </Base>
  )
}

export default Home
