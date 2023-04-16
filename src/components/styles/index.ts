import styled, { css } from 'styled-components'

const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark[300]};
    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xsmall};
  `}
`

export { Card }
