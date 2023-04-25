import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import MenuList from '.'

describe('<MenuList />', () => {
  it('should render menu desktop version ', () => {
    renderWithTheme(<MenuList />)

    const menuList = screen.getByLabelText('menu list: desktop')

    expect(menuList).toBeInTheDocument()
  })

  it('should render menu mobile version ', () => {
    renderWithTheme(<MenuList isMobile />)

    const menuList = screen.getByLabelText('menu list: mobile')

    expect(menuList).toBeInTheDocument()
  })

  it('should render menu list items', () => {
    renderWithTheme(<MenuList />)

    const menuToday = screen.getByText('Today')
    const menuCategories = screen.getByText('Categories')
    const menuHabits = screen.getByText('Habits')

    expect(menuToday).toBeInTheDocument()
    expect(menuCategories).toBeInTheDocument()
    expect(menuHabits).toBeInTheDocument()
  })
})
