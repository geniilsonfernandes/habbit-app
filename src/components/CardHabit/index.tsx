import CheckHabit from 'components/CheckHabit'
import Label from 'components/Label'
import * as S from './styles'
import { useState } from 'react'
import { Status, statusMap } from 'shared/habit/helper/statusMap'

export type CardHabitProps = {
  id: string
  habitName: string
  intervalTime: string
  habbitColor: string
  habbitLastEightDays?: {
    id: string
    day: string
    date: number
    status: 'success' | 'delayed' | 'failed' | 'default'
  }[]
  status?: Status
  version?: 'days' | 'today'

  onClick?: () => void
}

const CardHabit = ({
  intervalTime,
  habbitColor,
  habitName,
  habbitLastEightDays = [],
  version = 'days',
  status = 'default',
  ...props
}: CardHabitProps) => {
  const limitHabitLastEightDays = habbitLastEightDays?.slice(0, 8)

  const [currentState, setCurrentState] = useState<Status>(status)

  const handleClick = (currentState: Status) => {
    const nextState = statusMap[currentState]
    setCurrentState(nextState)
  }

  return (
    <S.Wrapper
      {...props}
      orientation={version === 'today' ? 'horizontal' : 'vertical'}
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
            status={currentState}
            aria-label="Habit Actions"
            onClick={() => handleClick(currentState)}
          >
            <S.ActionIcon />
          </S.HabitActions>
        </>
      ) : (
        <S.Main>
          {limitHabitLastEightDays.map((item) => (
            <CheckHabit
              key={item.id}
              day={item.day}
              date={item.date}
              status={item.status}
              id={item.id}
            />
          ))}
        </S.Main>
      )}
    </S.Wrapper>
  )
}

export default CardHabit
