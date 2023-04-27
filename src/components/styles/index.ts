import styled, { css } from 'styled-components'
import theme from 'styles/theme'

const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background.transparent[900]};
    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xsmall};
  `}
`

type GridProps = {
  columns?: number
  gap?: keyof typeof theme.spacings
}

const Grid = styled.div<GridProps>`
  ${({ theme, columns = 1, gap = 'large' }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    gap: ${theme.spacings[gap]};
  `}
`

type FlexProps = {
  direction?: 'row' | 'column'
  justify?: 'center' | 'flex-start' | 'flex-end'
  align?: 'center' | 'flex-start' | 'flex-end'
  gap?: keyof typeof theme.spacings
}
const Flex = styled.div<FlexProps>`
  ${({
    theme,
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    gap = 'large',
  }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${theme.spacings[gap]};
  `}
`

export { Card, Grid, Flex }
