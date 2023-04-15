import styled, { css } from 'styled-components'
import { stylesModifiers } from './modifiers/stylesModifiers'

const HabitStatus = styled.div<{
  status: 'success' | 'delayed' | 'failed' | 'default'
}>`
  ${({ theme, status }) => css`
    ${!!status && stylesModifiers[status](theme)}
  `}
`

export { HabitStatus }
