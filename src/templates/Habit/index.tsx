import Header from 'components/Header'
import { useRouter } from 'next/router'
import Base from 'templates/Base'

import * as S from './styles'

import { useQuery } from '@tanstack/react-query'
import CalendarChart from 'components/CalendarChart'
import YearLineChart from 'components/YearLineChart'
import { HabitService } from 'services/habitService'
import { useState } from 'react'
import CreateHabit from 'components/CreateHabit'

const Habit = () => {
  const [isEdit, setIsEdit] = useState(false)

  const router = useRouter()
  const { id } = router.query as { id: string }
  const { data: Habit, isLoading } = useQuery({
    queryKey: ['habit_unique', id],
    queryFn: () => HabitService.get(id),

    onError: (error) => {
      console.log(error)
      router.back()
    },
  })

  const goBack = () => {
    if (isEdit) {
      setIsEdit(false)

      return
    }
    router.back()
  }

  const handleEdit = () => {
    setIsEdit(true)
  }

  return (
    <Base isLoading={isLoading}>
      {!isEdit && (
        <Header title={Habit?.name} goBack={goBack} edit={() => handleEdit()} />
      )}
      {isEdit && (
        <S.Box
          style={{
            height: '80vh',
            padding: '0',
          }}
        >
          <CreateHabit
            goBack={goBack}
            isEdit={isEdit}
            id={id}
            defaultValues={{
              habit: Habit?.name || '',
              category: Habit?.category || '',
              frequency: Habit?.interval || [],
            }}
          />
        </S.Box>
      )}
      {!isEdit && (
        <S.Main>
          <S.Box>
            <S.BoxHeader>
              <S.Title>History</S.Title>
              <S.Title>Last Year</S.Title>
            </S.BoxHeader>
            <CalendarChart
              progress={Habit?.progress}
              intervalTime={Habit?.interval}
            />
          </S.Box>
          <S.Box>
            <S.BoxHeader>
              <S.Title>Stastistic</S.Title>
              <S.Title>Last Year</S.Title>
            </S.BoxHeader>
            <S.BoxContent
              style={{
                height: '200px',
              }}
            >
              <YearLineChart HabitMonths={Habit?.months} />
            </S.BoxContent>
          </S.Box>
        </S.Main>
      )}
    </Base>
  )
}

export default Habit
