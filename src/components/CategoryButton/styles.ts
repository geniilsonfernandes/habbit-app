import styled, { css } from 'styled-components'

type IColorProps = {
  color: string
}

export const Wrapper = styled.button<IColorProps>`
  ${({ color }) => css`
    background-color: ${color};
  `}
`

export const Icon = styled.div``
