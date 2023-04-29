import { screen } from '@testing-library/react'
import Header from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<Header />', () => {
  it('should render header with title and left component and right', () => {
    renderWithTheme(
      <Header
        title="Create habit"
        leftComponent={<div>left</div>}
        rightComponent={<div>right</div>}
      />,
    )

    expect(screen.getByText(/Create habit/i)).toBeInTheDocument()
    expect(screen.getByText(/left/i)).toBeInTheDocument()
    expect(screen.getByText(/right/i)).toBeInTheDocument()
  })
  it('should render header with title and left component and right and go back button', () => {
    renderWithTheme(
      <Header
        title="Create habit"
        leftComponent={<div>left</div>}
        rightComponent={<div>right</div>}
        goBack={() => console.log('goBack')}
      />,
    )

    expect(screen.getByText(/Create habit/i)).toBeInTheDocument()
    expect(screen.getByText(/right/i)).toBeInTheDocument()
  })
  it('should render header with title and left component and right and edit button', () => {
    renderWithTheme(
      <Header
        title="Create habit"
        leftComponent={<div>left</div>}
        rightComponent={<div>right</div>}
        edit={() => console.log('edit')}
      />,
    )

    expect(screen.getByText(/Create habit/i)).toBeInTheDocument()
    expect(screen.getByText(/left/i)).toBeInTheDocument()
  })
})
