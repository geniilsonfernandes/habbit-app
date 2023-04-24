import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import UserAvatar from '.'
import userEvent from '@testing-library/user-event'

const props = {
  avatarUrl: 'img.png',
  name: 'Rafael',
  onClick: jest.fn(),
}
describe('<UserAvatar />', () => {
  it('should render and show avatar image and title', () => {
    renderWithTheme(<UserAvatar {...props} />)

    const avatar = screen.getByAltText(/Rafael/i)

    expect(avatar).toHaveAttribute('src', 'img.png')

    expect(avatar).toHaveAttribute('alt', 'Rafael')
  })

  it('should render and show arrow down icon and click', async () => {
    renderWithTheme(<UserAvatar {...props} />)

    const arrowDown = screen.getByTitle(/Arrow down/i)

    expect(arrowDown).toBeInTheDocument()

    await userEvent.click(arrowDown)

    expect(props.onClick).toHaveBeenCalled()
  })

  it('should render and show avatar first letter', () => {
    renderWithTheme(<UserAvatar {...props} avatarUrl={undefined} />)

    const avatarLetter = screen.getByText('R')

    expect(avatarLetter).toBeInTheDocument()
  })
})
