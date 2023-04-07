import styled, { css } from 'styled-components'

type statusColor = {
  color?: string
}

type LabelProps = {
  variant: 'light' | 'dark'
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
export const Status = styled.div<statusColor>`
  ${({ color }) => css`
    width: 2px;
    height: 20px;
    display: block;
    background-color: ${color};
  `}
`
export const Label = styled.span<LabelProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${variant === 'light'
      ? theme.colors.text.black[100]
      : theme.colors.text.white[100]};
  `}
`
