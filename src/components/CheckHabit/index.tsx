import { useEffect, useState } from 'react'
import * as S from './styles'
import { Status, statusMap } from 'shared/habit/helper/statusMap'

export type CheckHabitProps = {
  id: string
  day: string
  date: number
  status?: Status
  onClick?: (currentState: Status) => void
}

const CheckHabit = ({
  id,
  day,
  date,
  status = 'default',
  onClick,
}: CheckHabitProps) => {
  const [colorState, setColorState] = useState<Status>(status)

  const handleClickHabitChange = (currentStatus: Status) => {
    const nextStatus: Status = statusMap[currentStatus]
    setColorState(nextStatus)
    onClick && onClick(nextStatus)
  }

  useEffect(() => {
    setColorState(status)
  }, [status])

  return (
    <S.Wrapper aria-label={`Habit ${id} - ${day} - ${date} - ${colorState}`}>
      <S.Day>{day}</S.Day>
      <S.Date
        status={colorState}
        onClick={() => handleClickHabitChange(colorState)}
      >
        {date}
      </S.Date>
    </S.Wrapper>
  )
}
export default CheckHabit
