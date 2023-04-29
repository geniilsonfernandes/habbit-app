import * as S from './styles'

const list = [
  {
    title: 'Habits',
    icon: 'habits',
    key: 'home',
  },
  {
    title: 'Today',
    icon: 'home',
    key: 'today',
  },
  {
    title: 'Categories',
    icon: 'category',
    key: 'categories',
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
        <S.MenuItem
          key={item.key}
          isMobile={isMobile}
          aria-label={item.title}
          isActived={item.key === 'home'}
        >
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
