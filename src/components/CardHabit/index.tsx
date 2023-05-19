import { useMutation } from '@tanstack/react-query'
import CheckHabit from 'components/CheckHabit'
import Label from 'components/Label'
import { Status } from 'shared/habit/helper/statusMap'

import { HabitService } from 'services/habitService'
import { queryClient } from 'services/store/queryClient'
import * as S from './styles'

export type CardHabitProps = {
  id: string
  habitName: string
  intervalTime: string
  habbitColor: string
  progress: {
    date: Date
    progress: Status
    id: string | null
    date_view: {
      day: string
      nm_day: string
      month: string
    }
  }[]

  version?: 'days' | 'today'
}

type HandleClickProps = {
  status: Status
  date: Date
  day_id?: string | null
}

const CardHabit = ({
  intervalTime,
  habbitColor,
  habitName,
  progress,
  id,
  version = 'days',
}: CardHabitProps) => {
  const editHabit = useMutation({
    mutationKey: ['updateHabit'],
    mutationFn: HabitService.saveProgress,
    onSettled: () => {
      queryClient.invalidateQueries(['habit', 'list'])
    },
    onError() {
      queryClient.invalidateQueries(['habit', 'list'])
    },
  })

  const handleClick = ({ status, date, day_id }: HandleClickProps) => {
    editHabit.mutate({
      user_id: '101',
      habit_id: id,
      data: {
        date: date,
        progress: status,
        day_id: day_id ? day_id : null,
      },
    })
  }

  const onClick = () => {
    console.log('click')
  }

  return (
    <S.Wrapper
      orientation={version === 'today' ? 'horizontal' : 'vertical'}
      onClick={onClick}
    >
      <Label
        title={habitName}
        description={intervalTime}
        barColor={habbitColor}
        orientation={version === 'today' ? 'vertical' : 'horizontal'}
      />

      {version === 'today' ? (
        <>
          <S.HabitActions
            status={'default'}
            aria-label="Habit Actions"
            onClick={() => console.log('click')}
          >
            <S.ActionIcon />
          </S.HabitActions>
        </>
      ) : (
        <S.Main>
          {progress.reverse().map((item) => (
            // muda para ProgressHabit
            <CheckHabit
              key={item.date.toString()}
              day={item.date_view.nm_day}
              date={item.date_view.day}
              status={item.progress}
              id={item.date.toString()}
              onClick={(currentState) =>
                handleClick({
                  status: currentState,
                  day_id: item.id ? item.id : null,
                  date: item.date,
                })
              }
            />
          ))}
        </S.Main>
      )}
    </S.Wrapper>
  )
}

export default CardHabit
