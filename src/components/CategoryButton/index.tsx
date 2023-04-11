import * as S from './styles'

export type CategoryButtonProps = {
  icon?: React.ReactNode
  title?: string
  color?: string
  onClick?: () => void
}

const CategoryButton = ({
  color = 'trasparent',
  icon,
  onClick,
  title,
}: CategoryButtonProps) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <S.Wrapper onClick={handleClick} color={color} title={title}>
      {icon && <S.Icon>{icon}</S.Icon>}
    </S.Wrapper>
  )
}

export default CategoryButton
