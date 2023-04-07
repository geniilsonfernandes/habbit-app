import CheckHabit from 'components/CheckHabit'
import * as S from './styles'
import HeadLabel from 'components/HeadLabel'

type CardHabitProps = {
  habbitName?: string
  intervalTime?: string
  habbitColor?: string
  habits?: number[]
}

const CardHabit = ({
  habits,
  intervalTime,
  habbitName = '',
  habbitColor = '#A9A9AA',
}: CardHabitProps) => (
  <S.Wrapper>
    <S.Header>
      <HeadLabel title={habbitName} statusColor={habbitColor} />
      {intervalTime && <S.IntervalTime>{intervalTime}</S.IntervalTime>}
    </S.Header>
    <S.Main>
      {habits &&
        habits.map((item) => (
          <CheckHabit key={item} day="Seg" date={item} status="success" />
        ))}
    </S.Main>
  </S.Wrapper>
)

export default CardHabit
