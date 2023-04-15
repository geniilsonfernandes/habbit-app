import { Card } from 'components/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Card)`
  max-width: 380px;
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
    gap: 8px;
  `}
`
export const NoHaveEntries = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.white[100]};
    text-align: center;
  `}
`
