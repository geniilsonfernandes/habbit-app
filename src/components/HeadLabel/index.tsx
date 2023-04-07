import * as S from './styles'

export type HeadLabelProps = {
  title: string
  barColor?: string
  variant?: 'light' | 'dark'
}

const HeadLabel = ({
  title,
  variant = 'light',
  barColor = '#A9A9AA',
}: HeadLabelProps) => (
  <S.Wrapper>
    <S.Status color={barColor} />
    <S.Label variant={variant}>{title}</S.Label>
  </S.Wrapper>
)

export default HeadLabel
