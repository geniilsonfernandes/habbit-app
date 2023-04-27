import Button from 'components/Button'
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
      opacity: 0.4;
      z-index: -1;
    }
    overflow-x: hidden;
    backdrop-filter: blur(86px);
  `}
`

export const Filter = styled.div`
  height: 100%;
  backdrop-filter: blur(86px);
  position: relative;
`

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.body.width};

    height: 100%;
    padding: 0 ${theme.spacings.xsmall};

    @media (max-width: ${theme.viewPorts.tablet}) {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;

    border-bottom: 1px solid ${theme.colors.primary[100]};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3.2rem;
    padding: 3.2rem 0 0 0;

    @media (max-width: ${theme.viewPorts.tablet}) {
      max-height: calc((100vh - 96px));
      overflow-y: scroll;
    }
  `}
`

export const MenuMobile = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Sidebar = styled.div`
  ${({ theme }) => css`
    grid-column-start: 1;
    grid-column-end: 3;
    @media (max-width: ${theme.viewPorts.tablet}) {
      display: none;
    }
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    grid-column-start: 3;
    grid-column-end: 7;
    @media (max-width: ${theme.viewPorts.tablet}) {
      grid-column-start: 1;
      grid-column-end: 7;
    }
  `}
`

export const ButtonAdd = styled(Button).attrs({
  size: 'small',
})`
  ${({ theme }) => css`
    position: fixed;
    bottom: 32px;
    right: 24vw;

    background: ${theme.colors.primary[100]};
  `}
`
