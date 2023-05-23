import CreateHabit from 'components/CreateHabit'
import Head from 'components/Head'
import MenuList from 'components/MenuList'
import Modal from 'components/Modal'
import useMediaQuery from 'hook/useMediaQuery'
import useVisibility from 'hook/useVisibility'
import { FaPlus } from 'react-icons/fa'
import * as S from './styles'
import Loader from 'components/Loader'
import { useRouter } from 'next/router'

type BaseProps = {
  children: React.ReactNode
  isLoading?: boolean
  user: {
    name: string
    img: string
  }
}

const user = {
  name: 'placeholder',
  img: 'https://avatars.githubusercontent.com/u/61945302?v=4',
}

const Base = ({ children, isLoading = false, user }: BaseProps) => {
  console.log(user)

  const router = useRouter()

  const showButtonAdd = router.pathname === '/'

  const { isVisible, hide, show } = useVisibility()

  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleOpenSidebar = () => {
    console.log('click')
  }

  const handleCreateHabit = () => {
    show()
  }

  return (
    <div>
      <S.Container>
        <S.Filter>
          <S.WrapperContent>
            <S.Header>
              <Head
                title="Habits"
                user={{
                  name: user.name,
                  img: user.img,
                }}
                menuMobileClick={handleOpenSidebar}
              />
            </S.Header>
            <S.Content>
              <S.Sidebar>
                <MenuList />
              </S.Sidebar>
              <S.Main>
                {isLoading && <Loader />}
                {!isLoading && <>{children}</>}
              </S.Main>
            </S.Content>
          </S.WrapperContent>
        </S.Filter>
      </S.Container>
      {isMobile && (
        <S.MenuMobile>
          <MenuList isMobile={isMobile} />
        </S.MenuMobile>
      )}

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
