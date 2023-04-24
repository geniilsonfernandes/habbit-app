import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import Menu from '.'
import userEvent from '@testing-library/user-event'

jest.mock('hook/useMediaQuery', () => {
  return jest.fn().mockImplementation((query: string) => {
    return query === '(max-width: 768px)'
  })
})

const props = {
  menuMobileClick: jest.fn(),
  title: 'Habits',
  user: {
    name: 'jaca',
    img: 'jaca.png',
  },
}

describe('<Menu />', () => {
  it('should render the menu desktop version', () => {
    renderWithTheme(<Menu {...props} />)

    const menuTitle = screen.getByRole('heading', { name: 'Habits' })

    expect(menuTitle).toBeInTheDocument()
  })

  it('should render the menu mobile version when we click on menu mobile', async () => {
    renderWithTheme(<Menu {...props} />)

    const menuMobile = screen.getByTitle('Menu mobile')

    await userEvent.click(menuMobile)

    expect(props.menuMobileClick).toHaveBeenCalled()
  })

  it("should render the user's name whn click on user ", async () => {
    renderWithTheme(<Menu {...props} />)

    const userAvatar = screen.getByAltText('jaca')

    await userEvent.click(userAvatar)

    expect(userAvatar).toBeInTheDocument()
    expect(userAvatar).toHaveAttribute('src', 'jaca.png')
  })
})
