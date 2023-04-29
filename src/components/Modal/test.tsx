import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<Modal />', () => {
  it('should render the children', () => {
    renderWithTheme(
      <Modal onClose={() => console.log('oi')} isOpen>
        <div>modal</div>
      </Modal>,
    )

    expect(screen.getByText(/modal/i)).toBeInTheDocument()
  })

  it("shouldn't render the children if the modal is closed", () => {
    renderWithTheme(
      <Modal onClose={() => console.log('oi')} isOpen={false}>
        <div>modal</div>
      </Modal>,
    )

    expect(screen.queryByText(/modal/i)).not.toBeInTheDocument()
  })

  it('should call onClose when the overlay is clicked and hidden element', () => {
    const onClose = jest.fn()
    const isOPen = true

    renderWithTheme(
      <Modal onClose={onClose} isOpen={isOPen}>
        <div>modal</div>
      </Modal>,
    )

    const overlay = screen.getByLabelText(/overlay/i)

    overlay.click()

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should call onClose when the esc key is pressed', async () => {
    const onClose = jest.fn()

    renderWithTheme(
      <Modal onClose={onClose} isOpen>
        <div>modal</div>
      </Modal>,
    )

    await userEvent.keyboard('{Escape}')

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should remove the scroll from the body when the modal is open', () => {
    renderWithTheme(
      <Modal onClose={() => console.log('oi')} isOpen>
        <div>modal</div>
      </Modal>,
    )

    const body = document.querySelector('body')

    expect(body).toHaveClass('no-scroll')
  })

  it("should modal be size 'small' by default", () => {
    renderWithTheme(
      <Modal onClose={() => console.log('oi')} isOpen>
        <div>modal</div>
      </Modal>,
    )

    const modal = screen.getByLabelText(/modal/i)

    expect(modal).toHaveStyle({ width: '375px' })
  })
})
