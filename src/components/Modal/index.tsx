import { useEffect, useState } from 'react'
import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const [topHeight, setTopHeight] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpen) {
      setTopHeight(window.scrollY)

      body?.classList.add('no-scroll')
    } else {
      body?.classList.remove('no-scroll')
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  return (
    <>
      {isOpen && (
        <S.Modal height={topHeight} isOpen={isOpen}>
          <S.ModalOverlayer onClick={onClose} aria-label="overlay" />
          <S.Content>{children}</S.Content>
        </S.Modal>
      )}
    </>
  )
}

export default Modal
