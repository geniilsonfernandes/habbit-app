import { Status } from 'shared/habit/helper/statusMap'
import { HabitStatus } from 'shared/habit/styles'
import styled, { css } from 'styled-components'

export type DateProps = {
  status: Status
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Day = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.xsmall};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Date = styled(HabitStatus)<DateProps>`
  ${({ theme }) => css`
    user-select: none;
    height: 38px;
    width: 29px;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: ${theme.font.sizes.xsmall};
    &:active {
      transform: scale(0.95);
    }
  `}
`
