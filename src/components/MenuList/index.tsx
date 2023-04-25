import * as S from './styles'

const list = [
  {
    title: 'Today',
    icon: 'home',
    key: 'home',
  },
  {
    title: 'Categories',
    icon: 'category',
    key: 'categories',
  },
  {
    title: 'Habits',
    icon: 'habits',
    key: 'habits',
  },
]
export type MenuListProps = {
  isMobile?: boolean
}

const MenuList = ({ isMobile = false }: MenuListProps) => {
  return (
    <S.Wrapper
      isMobile={isMobile}
      aria-label={`menu list: ${isMobile ? 'mobile' : 'desktop'}`}
    >
      {list.map((item) => (
        <S.MenuItem key={item.key} isMobile={isMobile} aria-label={item.title}>
          {item.icon === 'home' && <S.HomeIcon />}
          {item.icon === 'category' && <S.CategoryIcon />}
          {item.icon === 'habits' && <S.habitIcon />}
          <S.Title>{item.title}</S.Title>
        </S.MenuItem>
      ))}
    </S.Wrapper>
  )
}

export default MenuList
