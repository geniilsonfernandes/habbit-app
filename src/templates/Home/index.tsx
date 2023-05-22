import CardHabit from 'components/CardHabit'
import Base from 'templates/Base'

import * as S from './styles'

import { useQuery } from '@tanstack/react-query'
import Loader from 'components/Loader'
import { HabitService, IGetAllHabitsResponse } from 'services/habitService'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const { data, isLoading } = useQuery({
    queryKey: ['habit', 'list'],
    queryFn: HabitService.getAll,
    select: (data: IGetAllHabitsResponse) => {
      const mapHabit = data.habit.map((item) => {
        return {
          id: item.id,
          habitName: item.name,
          intervalTime: item.interval,
          habbitColor: item.color,
          progress: item.lastEightDays,
        }
      })
      return mapHabit
    },
  })

  const handleClickToOpenHabit = (id: string) => {
    router.push(`/habit/${id}`)
  }

  return (
    <Base>
      <RenderIf condition={!!data && !isLoading}>
        <S.Habits>
          {data &&
            data.map((item) => (
              <CardHabit
                key={item.id}
                {...item}
                onClick={() => handleClickToOpenHabit(item.id)}
              />
            ))}
        </S.Habits>
      </RenderIf>
    </Base>
  )
}

export default Home
