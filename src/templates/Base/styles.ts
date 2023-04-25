import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background[800]};
    min-height: 100vh;

    position: relative;
    &:before {
      content: '';
      position: absolute;
      display: block;
      right: 0;
      width: 500px;
      height: 500px;
      filter: blur(150px);
      background: ${theme.colors.primary.gradient[100]};
      opacity: 0.6;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      left: 0;
      bottom: 0;
      width: 500px;
      height: 500px;
      filter: blur(150px);
      background: ${theme.colors.primary.gradient[200]};
      opacity: 0.2;
      z-index: -1;
    }
    backdrop-filter: blur(86px);
  `}
`

export const Filter = styled.div`
  height: 100%;
  backdrop-filter: blur(86px);
`

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.body.width};

    height: 100%;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;

    border-bottom: 1px solid ${theme.colors.primary[100]};
  `}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3.2rem;
  padding: 3.2rem 0 0 0;
`

export const Sidebar = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`
export const Main = styled.div`
  grid-column-start: 3;
  grid-column-end: 7;
`
