import styled, { css } from 'styled-components'

export const Habits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 400px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 32px;
`

export const Box = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.radius.md};

    background-color: ${theme.colors.background.transparent[900]};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const BoxContent = styled.div``
export const BoxHeader = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[100]};
  `}
`
export const BoxFooter = styled.div``

export const SelectWrapper = styled.div`
  position: relative;
`
export const Select = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[100]};
    background: ${theme.colors.background[900]};
    border-radius: ${theme.radius.md};
    height: 40px;
    padding: ${theme.spacings.xsmall};

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    gap: 8px;
  `}
`

export const SelectOptions = styled.div`
  ${({ theme }) => css`
    position: absolute;

    top: 110%;
    background: ${theme.colors.background[900]};
    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xxsmall};
    width: 100%;

    z-index: 10;

    height: 100px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.background[900]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.background[800]};
      border-radius: ${theme.radius.md};
    }
  `}
`
export const SelectOption = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[100]};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.radius.md};

    cursor: pointer;

    &:hover {
      background: ${theme.colors.background[800]};
    }
  `}
`

export const SelectComponent = styled.select`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[100]};
    background: ${theme.colors.background[900]};
    border-radius: ${theme.radius.md};
    padding: ${theme.spacings.xxsmall};

    border: none;
  `}
`
