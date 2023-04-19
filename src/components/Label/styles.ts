import styled, { css } from 'styled-components'

type statusColor = {
  color?: string
}

type WrapperProps = {
  orientation?: 'horizontal' | 'vertical'
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, orientation = 'horizontal' }) => css`
    padding-left: ${theme.spacings.xxsmall};
    position: relative;
    justify-content: space-between;
    align-items: center;
    display: ${orientation === 'horizontal' ? 'flex' : 'block'};
  `};
`
export const Status = styled.div<statusColor>`
  ${({ color }) => css`
    height: 100%;
    left: 0;
    width: 2px;
    position: absolute;
    display: block;
    background-color: ${color};
  `}
`
export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text[100]};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text[300]};
  `}
`
