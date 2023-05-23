import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;

    background: ${theme.colors.background[900]};
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  `}
`
export const Header = styled.div`
  flex: 1;
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 600px;
    width: 100%;
    z-index: 100;
    background: ${theme.colors.background[800]};
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text[100]};
    margin-bottom: 16px;
    text-align: center;
  `}
`
export const Image = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    bottom: -200px;
    width: 400px;
    margin-bottom: -300px;
  }
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[400]};
    margin-bottom: 16px;
    font-weight: 400;
    text-align: center;
  `}
`

export const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & > div {
    width: 100%;
  }
`
