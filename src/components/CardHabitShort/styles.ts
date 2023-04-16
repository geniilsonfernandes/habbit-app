import { MdCheck } from 'react-icons/md'
import { HabitStatus } from 'shared/habit/styles'
import styled, { css } from 'styled-components'

type Props = {
  barColor?: string
}
type HabitActionsProps = {
  status?: 'success' | 'delayed' | 'failed' | 'default'
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark[400]};
    padding: ${theme.spacings.xxsmall};
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

export const HabitActions = styled(HabitStatus)<HabitActionsProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 40px;
    cursor: pointer;
    border-radius: ${theme.radius.md};
    border: none;

    color: ${theme.colors.light[400]};
  `}
`
