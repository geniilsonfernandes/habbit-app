import { useState } from 'react'
import * as S from './styles'

export type TextInputProps = {
  helperText?: string
  label?: string
  onRecoveryPassword?: () => void
} & S.TextInputProps

const TextInput = ({
  helperText,
  success,
  error,
  onRecoveryPassword,
  ...props
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleRecoveryPassword() {
    if (onRecoveryPassword) {
      onRecoveryPassword()
    }
  }

  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <S.Label htmlFor={props.id}>{props.label}</S.Label>

        {props.type === 'password' && onRecoveryPassword && (
          <S.RecoveryPassword onClick={handleRecoveryPassword}>
            Esqueceu a senha?
          </S.RecoveryPassword>
        )}
      </S.LabelWrapper>

      <S.InputWrapper>
        <S.Input
          error={error}
          success={success}
          {...props}
          type={
            props.type === 'password' && !showPassword ? 'password' : 'text'
          }
        />

        {props.type === 'password' && (
          <S.IconWrapper
            onClick={handleShowPassword}
            aria-label="show password"
          >
            {showPassword ? <S.EyeIconClose /> : <S.EyeIconOpen />}
          </S.IconWrapper>
        )}
      </S.InputWrapper>

      {helperText && (
        <S.HelperText success={success} error={error}>
          {helperText}
        </S.HelperText>
      )}
    </S.Wrapper>
  )
}

export default TextInput
