import styled, { css } from 'styled-components'
import { stylesModifiers } from './modifiers/stylesModifiers'
import { Status } from '../helper/statusMap'

const HabitStatus = styled.div<{
  status: Status
}>`
  ${({ theme, status }) => css`
    ${!!status && stylesModifiers[status](theme)}
  `}
`

export { HabitStatus }
