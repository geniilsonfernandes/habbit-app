import { screen } from '@testing-library/react'
import Label from '.'
import renderWithTheme from '../../utils/renderWithTheme'
import theme from '../../styles/theme'

describe('<Label />', () => {
  it('should render label with title and description and barcolor red', () => {
    renderWithTheme(
      <Label
        title="title"
        description="description"
        barColor={theme.colors.error[100]}
      />,
    )

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()

    expect(screen.getByLabelText('color')).toHaveStyle({
      backgroundColor: theme.colors.error[100],
    })
  })

  it('should render label with title without descripton', () => {
    renderWithTheme(<Label title="title" />)

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.queryByText('description')).not.toBeInTheDocument()
  })

  it("should render label in vertical orientation when it's passed", () => {
    renderWithTheme(<Label title="title" orientation="vertical" />)

    expect(screen.getByText('title').parentNode).toHaveStyle({
      display: 'block',
    })
  })
})
