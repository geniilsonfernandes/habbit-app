import CreateHabit from 'components/CreateHabit'
import Head from 'components/Head'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import useMediaQuery from 'hook/useMediaQuery'
import useVisibility from 'hook/useVisibility'
import { useRouter } from 'next/router'
import { FaPlus } from 'react-icons/fa'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
  isLoading?: boolean
}

const Base = ({ children, isLoading = false }: BaseProps) => {
  const router = useRouter()

  const showButtonAdd = router.pathname === '/'

  const { isVisible, hide, show } = useVisibility()

  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleCreateHabit = () => {
    show()
  }

  return (
    <div>
      <S.Container>
        <S.Filter>
          <S.WrapperContent>
            <S.Header>
              <Head title="Habits" />
            </S.Header>
            <S.Content>
              <S.Main>
                {isLoading && <Loader />}
                {!isLoading && <>{children}</>}
              </S.Main>
            </S.Content>
          </S.WrapperContent>
        </S.Filter>
      </S.Container>

      <Modal
        isOpen={isVisible}
        onClose={hide}
        size={isMobile ? 'large' : 'small'}
      >
        <>
          <CreateHabit
            goBack={() => {
              hide()
            }}
          />
        </>
      </Modal>
      {showButtonAdd && (
        <S.ButtonAdd onClick={handleCreateHabit}>
          <FaPlus />
        </S.ButtonAdd>
      )}
    </div>
  )
}

export default Base
