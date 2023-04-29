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

export const Content = styled.div`
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  ${intoOpacity}
`
