import { useEffect, useState } from 'react'
import * as S from './styles'

type Status = S.DateProps['status']

export type CheckHabitProps = {
  day: string
  date: number
  status?: Status
  onClick?: (currentState: Status) => void
}

const statusMap: Record<string, Status> = {
  default: 'success',
  success: 'waiting',
  waiting: 'failed',
  failed: 'default',
}

const CheckHabit = ({
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
