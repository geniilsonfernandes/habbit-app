import { Status, statusMap } from 'shared/habit/helper/statusMap'
import * as S from './styles'

export type CheckHabitProps = {
  id: string
  day: string
  date: string
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
  const handleClickHabitChange = (currentStatus: Status) => {
    const nextStatus: Status = statusMap[currentStatus]

    onClick && onClick(nextStatus)
  }

  return (
    <S.Wrapper aria-label={`Habit ${id} - ${day} - ${date} - ${status}`}>
      <S.Day>{day}</S.Day>
      <S.Date status={status} onClick={() => handleClickHabitChange(status)}>
        {date}
      </S.Date>
    </S.Wrapper>
  )
}
export default CheckHabit
