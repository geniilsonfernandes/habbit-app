import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Calendar = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    margin: 0 auto;
  `}
`

export const HabitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
`
