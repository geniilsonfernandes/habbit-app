import * as S from './styles'

export type CategoryButtonProps = {
  icon?: React.ReactNode
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  S.WrapperProps

const CategoryButton = ({
  color = 'trasparent',
  icon,
  onClick,
  title,
  ...props
}: CategoryButtonProps) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <S.Wrapper onClick={handleClick} color={color} title={title} {...props}>
      {icon && <S.Icon>{icon}</S.Icon>}
    </S.Wrapper>
  )
}

export default CategoryButton
