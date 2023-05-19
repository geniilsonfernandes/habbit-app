import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import * as S from './styles'

export type FeadbackPopUpProps = {
  message: string
  type?: 'success' | 'error'
  onClose: () => void
}

const FeadbackPopUp = ({
  message,
  type = 'success',
  onClose,
}: FeadbackPopUpProps) => {
  return (
    <S.FeadBackMessage status={type}>
      {type === 'success' ? (
        <FaCheckCircle size={78} aria-label="Success" />
      ) : (
        <FaTimesCircle size={78} aria-label="Error" />
      )}
      <S.MessageTitle>{message}</S.MessageTitle>
      <S.BackButton onClick={onClose}>Close</S.BackButton>
    </S.FeadBackMessage>
  )
}
export default FeadbackPopUp
