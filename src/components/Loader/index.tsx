import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export type LoaderProps = {
  size?: 'small' | 'medium' | 'large'
}

const LoadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div<LoaderProps>`
  ${({ theme, size = 'medium' }) => css`
    border: 0.4rem solid rgba(253, 253, 253, 0.096);
    border-top: 0.4rem solid ${theme.colors.primary[300]};
    border-radius: 50%;
    width: ${size === 'small' ? '2rem' : size === 'medium' ? '2rem' : '3rem'};
    height: ${size === 'small' ? '2rem' : size === 'medium' ? '2rem' : '3rem'};
    animation: ${LoadingAnimation} 0.6s linear infinite;
  `}
`

const Loader = (props: LoaderProps) => {
  return <Loading {...props} aria-label="Loading" />
}

export default Loader
