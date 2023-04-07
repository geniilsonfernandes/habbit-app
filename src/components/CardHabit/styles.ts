import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark[300]};
    border-radius: ${theme.radius.md};
    max-width: 384px;
    padding: 8px 10px 20px 10px;
  `}
`

export const Header = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const IntervalTime = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.white[100]};
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsmall};
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  `}
`
