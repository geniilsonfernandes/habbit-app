import styled, { DefaultTheme, css } from 'styled-components'

export type DateProps = {
  status?: 'success' | 'waiting' | 'failed' | 'default'
}

const DateModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.green[600]};
    border: 3px solid ${theme.colors.habit.green[500]};
  `,
  waiting: (theme: DefaultTheme) => css`
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
  color: #aaa;
  font-size: 1.4rem;
  padding-bottom: 7px;
`

export const Date = styled.div<DateProps>`
  ${({ theme, status = 'default' }) => css`
    user-select: none;
    height: 38px;
    width: 29px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    &:active {
      transform: scale(0.95);
    }
    ${!!status && DateModifiers[status](theme)};
  `}
`
