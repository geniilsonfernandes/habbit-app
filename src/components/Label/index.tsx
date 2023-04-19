import * as S from './styles'

export type LabelProps = {
  title: string
  description?: string
  barColor?: string
  orientation?: 'vertical' | 'horizontal'
}

const Label = ({
  title,
  barColor = '#A9A9AA',
  description,
  orientation,
}: LabelProps) => (
  <S.Wrapper orientation={orientation}>
    <S.Status color={barColor} aria-label="color" />
    <S.Label>{title}</S.Label>
    {description && <S.Description>{description}</S.Description>}
  </S.Wrapper>
)

export default Label
