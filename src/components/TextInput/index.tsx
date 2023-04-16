import * as S from './styles'

export type TextInputProps = {
  helperText?: string
  label?: string
} & S.TextInputProps

const TextInput = ({
  helperText,
  success,
  error,
  ...props
}: TextInputProps) => (
  <S.Wrapper>
    <S.Label htmlFor={props.id}>{props.label}</S.Label>
    <S.Input success={success} error={error} {...props} />
    {helperText && (
      <S.HelperText success={success} error={error}>
        {helperText}
      </S.HelperText>
    )}
  </S.Wrapper>
)

export default TextInput
