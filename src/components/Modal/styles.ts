import styled, { css } from 'styled-components'

type ModalProps = {
  height?: number
  isOpen?: boolean
}

const intoOpacity = css`
  animation: opacity 0.3s ease-in-out forwards;

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Modal = styled.div<ModalProps>`
  ${({ height }) => css`
    position: absolute;
    top: ${height}px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `}
`

export const ModalOverlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  ${intoOpacity}
`

export type ModalContentProps = {
  size?: 'small' | 'medium' | 'large'
}

const ContentModifiers = {
  small: () => css`
    width: 375px;
    height: 667px;
  `,
  medium: () => css`
    width: 768px;
    height: 80vh;
  `,
  large: () => css`
    width: 90vw;
    height: 90vh;
  `,
}

export const Content = styled.div<ModalContentProps>`
  ${({ size = 'small' }) => css`
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
    ${intoOpacity}

    ${ContentModifiers[size]()}
  `}
`
