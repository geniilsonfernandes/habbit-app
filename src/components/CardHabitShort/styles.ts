import styled, { DefaultTheme, css } from 'styled-components'
import { MdCheck } from 'react-icons/md'

type Props = {
  barColor?: string
}
type HabitActionsProps = {
  status?: 'success' | 'delayed' | 'failed' | 'default'
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark[400]};
    padding: 1rem;
    border-radius: ${theme.radius.md};
    display: flex;
    align-items: center;
  `}
`
export const HabitDescription = styled.div<Props>`
  ${({ theme, barColor = '#3e3e3e' }) => css`
    flex: 1;
    padding-left: ${theme.spacings.xxsmall};
    border-left: ${barColor} 0.2rem solid;
  `}
`

export const HabitName = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.white[100]};
  `}
`
export const HabitInterval = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.white[300]};
  `}
`

export const ActionIcon = styled(MdCheck)`
  ${({ theme }) => css`
    color: inherit;
    font-size: ${theme.font.sizes.xlarge};
  `}
`

const DateModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.green[600]};
    color: ${theme.colors.habit.green[500]};
  `,
  delayed: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.orange[600]};
    color: ${theme.colors.habit.orange[500]};
  `,
  failed: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.red[600]};
    color: ${theme.colors.habit.red[500]};
  `,
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.dark[300]};
    color: ${theme.colors.dark[200]};
  `,
}

export const HabitActions = styled.div<HabitActionsProps>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 40px;
    cursor: pointer;
    border-radius: ${theme.radius.md};
    ${!!status && DateModifiers[status](theme)};
  `}
`
