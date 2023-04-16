import * as S from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  S.ButtonProps

const Button = ({ children, isLoding, size, ...props }: ButtonProps) => (
  <S.Wrapper {...props} size={size} isLoding={isLoding}>
    {isLoding && <S.Loading size={size} />}
    <S.Content isLoding={isLoding}>{children}</S.Content>
  </S.Wrapper>
)

export default Button
