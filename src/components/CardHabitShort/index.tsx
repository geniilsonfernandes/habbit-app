import { useState } from 'react'
import * as S from './styles'
import { Status, statusMap } from 'shared/habit/helper/statusMap'

export type CardHabitShortProps = {
  id: string
  HabitName: string
  intervalTime: string
  status?: Status
  habbitColor?: string
}
const CardHabitShort = ({
  id,
  intervalTime,
  HabitName,
  status = 'default',
  habbitColor,
}: CardHabitShortProps) => {
  const [currentState, setCurrentState] = useState<Status>(status)

  const handleClick = (currentState: Status) => {
    const nextState = statusMap[currentState]
    setCurrentState(nextState)
  }

  return (
    <S.Wrapper
      aria-label={`Habit ${id} - ${HabitName} - ${intervalTime} - ${currentState}`}
    >
      <S.HabitDescription barColor={habbitColor}>
        <S.HabitName>{HabitName}</S.HabitName>
        <S.HabitInterval>{intervalTime}</S.HabitInterval>
      </S.HabitDescription>
      <S.HabitActions
        onClick={() => handleClick(currentState)}
        status={currentState}
        aria-label="Habit Actions"
      >
        <S.ActionIcon />
      </S.HabitActions>
    </S.Wrapper>
  )
}

export default CardHabitShort
