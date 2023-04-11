import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import CategoryButton from '.'
import renderWithTheme from '../../utils/renderWithTheme'

const props = {
  icon: <div data-testid="icon"> ICON </div>,
  onclick: () => {
    console.log('click')
  },
  title: 'title',
  color: theme.colors.primary[100],
}

describe('<CategoryButton />', () => {
  it('Deve renderizar o botão corretamente com suas Props', () => {
    renderWithTheme(<CategoryButton {...props} />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      backgroundColor: props.color,
    })
    expect(button).toHaveAttribute('title', props.title)
  })

  it('Deve exibir o icone quando passado', () => {
    renderWithTheme(<CategoryButton {...props} />)

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })

  it('Deve chamar a função onClick quando clicado', () => {
    const onClick = jest.fn()
    renderWithTheme(<CategoryButton {...props} onClick={onClick} />)

    const button = screen.getByRole('button')

    button.click()

    expect(onClick).toBeCalledTimes(1)
  })

  it('Deve renderizar o botão corretamente sem as Props onClick e color', () => {
    renderWithTheme(
      <CategoryButton {...props} onClick={undefined} color={undefined} />,
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      backgroundColor: 'trasparent',
    })
  })
})
