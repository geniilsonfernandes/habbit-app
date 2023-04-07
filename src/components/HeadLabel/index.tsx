import * as S from './styles'

type HeadLabelProps = {
  title: string
  statusColor?: string
  variant?: 'light' | 'dark'
}

const HeadLabel = ({
  title,
  variant = 'light',
  statusColor = '#A9A9AA',
}: HeadLabelProps) => (
  <S.Wrapper>
    <S.Status status={statusColor} />
    <S.Label variant={variant}>{title}</S.Label>
  </S.Wrapper>
)

export default HeadLabel
