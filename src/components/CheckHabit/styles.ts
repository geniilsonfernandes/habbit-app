import styled, { DefaultTheme, css } from 'styled-components'

export type DateProps = {
  status: 'success' | 'delayed' | 'failed' | 'default'
}

const DateModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.green[600]};
    border: 3px solid ${theme.colors.habit.green[500]};
  `,
  delayed: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.orange[600]};
    border: 3px solid ${theme.colors.habit.orange[500]};
  `,
  failed: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.red[600]};
    border: 3px solid ${theme.colors.habit.red[500]};
  `,
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.dark[200]};
    border: 3px solid ${theme.colors.dark[400]};
  `,
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Day = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.white[100]};
    font-size: ${theme.font.sizes.xsmall};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Date = styled.div<DateProps>`
  ${({ theme, status }) => css`
    user-select: none;
    height: 38px;
    width: 29px;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text.white[100]};
    font-size: ${theme.font.sizes.xsmall};
    &:active {
      transform: scale(0.95);
    }
    ${!!status && DateModifiers[status](theme)};
  `}
`
