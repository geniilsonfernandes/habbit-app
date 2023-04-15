import CheckHabit from 'components/CheckHabit'
import HeadLabel from 'components/HeadLabel'
import * as S from './styles'

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
}

const CardHabit = ({
  intervalTime,
  habbitColor,
  habitName,
  habbitLastEightDays,
  ...props
}: CardHabitProps) => {
  const limitHabitLastEightDays = habbitLastEightDays?.slice(0, 8) || []

  return (
    <S.Wrapper {...props}>
      <S.Header>
        <HeadLabel title={habitName} barColor={habbitColor} variant="dark" />
        {intervalTime && <S.IntervalTime>{intervalTime}</S.IntervalTime>}
      </S.Header>
      {habbitLastEightDays?.length === 0 && (
        <S.NoHaveEntries>Ainda não habitos cadastrados</S.NoHaveEntries>
      )}
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
    </S.Wrapper>
  )
}

export default CardHabit
