import { useMutation } from '@tanstack/react-query'
import CheckHabit from 'components/CheckHabit'
import Label from 'components/Label'
import { Status, statusMap } from 'shared/habit/helper/statusMap'

import { HabitService } from 'services/habitService'
import { queryClient } from 'services/store/queryClient'
import * as S from './styles'

export type CardHabitProps = {
  id: string
  habitName: string
  intervalTime: string[]
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

  onClick?: () => void

  today: {
    id?: string | null
    date: Date
    status: Status
  }
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
  onClick,
  today,
}: CardHabitProps) => {
  const editHabit = useMutation({
    mutationKey: ['updateHabit'],
    mutationFn: HabitService.saveProgress,
    onSettled: () => {
      queryClient.invalidateQueries(['habit', 'list'])
      queryClient.invalidateQueries(['habit_unique'])
    },
    onError() {
      queryClient.invalidateQueries(['habit_unique'])
      queryClient.invalidateQueries(['habit', 'list'])
    },
  })

  const handleToggleProgress = ({ status, date, day_id }: HandleClickProps) => {
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

  const handleClick = () => {
    onClick && onClick()
  }

  const todayToggleProgress = ({ status, date, day_id }: HandleClickProps) => {
    console.log({ status, date, day_id })

    const nextStatus: Status = statusMap[status]

    editHabit.mutate({
      user_id: '101',
      habit_id: id,
      data: {
        date: date,
        progress: nextStatus,
        day_id: day_id ? day_id : null,
      },
    })
  }

  return (
    <S.Wrapper
      orientation={version === 'today' ? 'horizontal' : 'vertical'}
      onClick={handleClick}
    >
      <Label
        title={habitName}
        description={intervalTime.join(', ')}
        barColor={habbitColor}
        orientation={version === 'today' ? 'vertical' : 'horizontal'}
      />

      {version === 'today' ? (
        <>
          <S.HabitActions
            status={today?.status || 'default'}
            aria-label="Habit Actions"
            onClick={() => {
              todayToggleProgress({
                status: today?.status || 'default',
                date: today.date,
                day_id: today?.id || null,
              })
            }}
          >
            <S.ActionIcon />
          </S.HabitActions>
        </>
      ) : (
        <S.Main
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {progress.map((item) => (
            // muda para ProgressHabit
            <CheckHabit
              key={item.date.toString()}
              day={item.date_view.nm_day}
              date={item.date_view.day}
              status={item.progress}
              clickable={intervalTime.includes(
                item.date_view.nm_day.toUpperCase(),
              )}
              id={item.date.toString()}
              onClick={(currentState) =>
                handleToggleProgress({
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
