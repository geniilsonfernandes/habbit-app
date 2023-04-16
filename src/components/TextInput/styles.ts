import styled, { DefaultTheme, css } from 'styled-components'

export type TextInputProps = {
  error?: boolean
  success?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const Wrapper = styled.div`
  position: relative;
`

const InputModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.error[100]};
    color: ${theme.colors.error[100]};
  `,
  success: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.success[100]};
    color: ${theme.colors.success[100]};
  `,

  disabled: () => css`
    cursor: not-allowed;
    opacity: 0.5;
  `,
}

export const Input = styled.input<TextInputProps>`
  ${({ theme, error, success, disabled }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.dark[300]};
    border-radius: ${theme.radius.md};
    height: 4.8rem;

    padding: 0 ${theme.spacings.xsmall};
    width: 100%;
    outline: none;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    transition: ${theme.transitions.ease_in_out};
    &::placeholder {
      color: ${theme.colors.text.white[300]};
    }

    &:focus {
      border-color: ${theme.colors.primary[100]};
    }

    ${error && InputModifiers.error(theme)}
    ${success && InputModifiers.success(theme)}
    ${disabled && InputModifiers.disabled()}

     color: ${theme.colors.text.white[100]};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text.white[100]};
    margin-bottom: 0.4rem;
  `}
`

export const HelperText = styled.span<TextInputProps>`
  ${({ theme, error, success }) => css`
    position: absolute;
    left: 0;
    bottom: -20px;
    user-select: none;

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.text.white[300]};
    margin-top: ${theme.spacings.xxsmall};
    transition: ${theme.transitions.ease_in_out};
    ${error && InputModifiers.error(theme)}
    ${success && InputModifiers.success(theme)}
    border: none;
  `}
`
