import UserAvatar from 'components/UserAvatar'
import * as S from './styles'
import useMediaQuery from 'hook/useMediaQuery'

export type HeadProps = {
  menuMobileClick: () => void
  title: string
  user: {
    name: string
    img: string
  }
}
const Head = ({ menuMobileClick, title, user }: HeadProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleAvatarClick = () => {
    console.log('click')
  }

  return (
    <S.Wrapper>
      <S.LeftSide>
        {isMobile && (
          <S.MenuToggle onClick={menuMobileClick} title="Menu mobile" />
        )}
      </S.LeftSide>
      <S.Title>{title}</S.Title>
      <S.RightSide>
        <UserAvatar
          name={user.name}
          avatarUrl={user.img}
          onClick={handleAvatarClick}
        />
      </S.RightSide>
    </S.Wrapper>
  )
}

export default Head
