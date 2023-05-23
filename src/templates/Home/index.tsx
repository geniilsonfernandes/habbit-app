import CardHabit from 'components/CardHabit'
import Base from 'templates/Base'

import * as S from './styles'

import { useQuery } from '@tanstack/react-query'
import Loader from 'components/Loader'
import { HabitService, IGetAllHabitsResponse } from 'services/habitService'
import { useRouter } from 'next/router'
import Visitor from 'templates/Visitor'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { GetServerSidePropsContext } from 'next'

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

type HomeProps = {
  user_id: string
  user: {
    name: string
    img: string
  }
}
const Home = ({ user_id, user }: HomeProps) => {
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

  console.log({ user_id })

  if (!user_id) {
    return <Visitor />
  }

  return (
    <Base
      user={{
        name: user.name,
        img: user.img,
      }}
    >
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
