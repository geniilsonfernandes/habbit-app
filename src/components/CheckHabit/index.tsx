import { useState } from 'react'
import * as S from './styles'

type Status = S.DateProps['status']

type CheckHabitProps = {
  day: string
  date: number
  status?: Status
  onClick?: (currentState: Status) => void
}
const CheckHabit = ({
  day,
  date,
  status = 'default',
  onClick,
}: CheckHabitProps) => {
  const [colorState, setColorState] = useState<Status>(status)

  const handleClickHabitChange = (currentStatus: Status) => {
    let nextStatus: Status

    switch (currentStatus) {
      case 'default':
        nextStatus = 'success'
        break
      case 'success':
        nextStatus = 'waiting'
        break
      case 'waiting':
        nextStatus = 'failed'
        break
      case 'failed':
        nextStatus = 'default'
        break
      default:
        nextStatus = 'default'
    }

    setColorState(nextStatus)

    if (onClick) {
      onClick(nextStatus)
    }
  }

  return (
    <S.Wrapper>
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
