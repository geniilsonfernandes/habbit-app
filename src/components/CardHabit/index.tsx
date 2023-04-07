import CheckHabit from 'components/CheckHabit'
import HeadLabel from 'components/HeadLabel'
import * as S from './styles'

export type CardHabitProps = {
  habbitName?: string
  intervalTime?: string
  habbitColor?: string
  habits?: number[]
}

const CardHabit = ({
  habits,
  intervalTime,
  habbitName = ' - ',
  habbitColor,
}: CardHabitProps) => (
  <S.Wrapper>
    <S.Header>
      <HeadLabel title={habbitName} barColor={habbitColor} />
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
