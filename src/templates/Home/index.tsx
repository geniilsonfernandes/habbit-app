import CardHabit from 'components/CardHabit'
import Base from 'templates/Base'

import * as S from './styles'

import { useQuery } from '@tanstack/react-query'
import Loader from 'components/Loader'
import { HabitService, IGetAllHabitsResponse } from 'services/habitService'

type RenderIfProps = {
  condition: boolean
  children: React.ReactNode
}
const RenderIf = ({ condition, children }: RenderIfProps) => {
  if (condition) {
    return <>{children}</>
  }

  return (
    <S.Loader>
      <Loader />
    </S.Loader>
  )
}

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['habit', 'list'],
    queryFn: HabitService.getAll,
    select: (data: IGetAllHabitsResponse) => {
      const mapHabit = data.habit.map((item) => {
        return {
          id: item.id,
          habitName: item.name,
          intervalTime: item.interval.map((item) => item).join(', '),
          habbitColor: item.color,
          progress: item.lastEightDays,
        }
      })
      return mapHabit
    },
  })

  return (
    <Base>
      <RenderIf condition={!!data && !isLoading}>
        <S.Habits>
          {data && data.map((item) => <CardHabit key={item.id} {...item} />)}
        </S.Habits>
      </RenderIf>
    </Base>
  )
}

export default Home
