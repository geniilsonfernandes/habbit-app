import styled, { css } from 'styled-components'

const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background[600]};
    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xsmall};
  `}
`

export { Card }
