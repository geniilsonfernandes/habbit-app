import Head from 'components/Head'
import * as S from './styles'
import MenuList from 'components/MenuList'
import useMediaQuery from 'hook/useMediaQuery'

type BaseProps = {
  children: React.ReactNode
}

const user = {
  name: 'placeholder',
  img: 'https://avatars.githubusercontent.com/u/61945302?v=4',
}

const Base = ({ children }: BaseProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleOpenSidebar = () => {
    console.log('click')
  }

  return (
    <S.Container>
      <S.Filter>
        <S.WrapperContent>
          <S.Header>
            <Head
              title="Habits"
              user={user}
              menuMobileClick={handleOpenSidebar}
            />
          </S.Header>
          <S.Content>
            <S.Sidebar>
              <MenuList />
            </S.Sidebar>
            <S.Main>{children}</S.Main>
          </S.Content>
          {isMobile && (
            <S.MenuMobile>
              <MenuList isMobile={isMobile} />
            </S.MenuMobile>
          )}
        </S.WrapperContent>
      </S.Filter>
    </S.Container>
  )
}

export default Base
