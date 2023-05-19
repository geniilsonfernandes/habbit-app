import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    background: ${theme.colors.background[800]};
    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xsmall};
    padding-top: 0;
    z-index: 10;
  `}
`

export const Form = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacings.small};
    flex: 1;
  `}
`

export const FormItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[100]};
  `}
`

export const HelperTextError = styled.span`
  ${({ theme }) => css`
    user-select: none;

    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.text[300]};
    margin-top: ${theme.spacings.xxsmall};
    transition: ${theme.transitions.ease_in_out};
    color: ${theme.colors.error[100]};
  `}
`

export const GridList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`

type DayButtonProps = {
  isActive?: boolean
}

export const DayButton = styled.button<DayButtonProps>`
  ${({ theme, isActive }) => css`
    width: 40px;
    height: 40px;

    border-radius: ${theme.radius.md};

    background: ${theme.colors.background[700]};
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};

    font-family: ${theme.font.family};

    transition: ${theme.transitions.ease_in_out};

    outline: none;
    border: none;

    z-index: 1;
    &:hover {
      background: ${theme.colors.background[700]};
    }

    cursor: pointer;

    ${isActive &&
    css`
      background: ${theme.colors.primary[100]};
      color: ${theme.colors.text[100]};

      &:hover {
        background: ${theme.colors.primary[300]};
      }
    `}
  `}
`
