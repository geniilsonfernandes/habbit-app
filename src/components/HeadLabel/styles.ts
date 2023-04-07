import styled, { css } from 'styled-components'

type statusColor = {
  status?: string
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
  ${({ status }) => css`
    width: 2px;
    height: 20px;
    display: block;
    background: ${status};
  `}
`
export const Label = styled.span<LabelProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.fontSizes.md};
    font-weight: 500;
    color: ${variant === 'light'
      ? theme.colors.text.white[100]
      : theme.colors.text.black[100]};
  `}
`
