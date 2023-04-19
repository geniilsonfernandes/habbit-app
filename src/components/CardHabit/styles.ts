import { Card } from 'components/styles'

import { MdCheck } from 'react-icons/md'
import { HabitStatus } from 'shared/habit/styles'
import styled, { css } from 'styled-components'

type WrapperProps = {
  orientation: 'horizontal' | 'vertical'
}

type HabitActionsProps = {
  status?: 'success' | 'delayed' | 'failed' | 'default'
}

export const Wrapper = styled(Card)<WrapperProps>`
  ${({ theme, orientation }) => css`
    display: ${orientation === 'horizontal' ? 'flex' : 'inline-block'};
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsmall};
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
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
    height: 34px;
    cursor: pointer;
    border-radius: ${theme.radius.md};
    border: none;

    color: ${theme.colors.text[400]};
  `}
`
