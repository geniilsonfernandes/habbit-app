import { screen } from '@testing-library/react'
import dayjs from 'dayjs'
import CalendarTab from '.'
import renderWithTheme from '../../utils/renderWithTheme'
import theme from 'styles/theme'

const today = dayjs()

const todayDate = today.format('DD/MM/YYYY')

const tomorow = today.add(1, 'day').format('DD/MM/YYYY')

describe('<CalendarTab />', () => {
  it('should show today ', () => {
    renderWithTheme(<CalendarTab />)

    const todayEl = screen.getByLabelText(todayDate)

    expect(todayEl).toHaveTextContent(today.format('DD'))
    expect(todayEl.firstElementChild).toHaveTextContent(today.format('ddd'))
  })

  it('should click in the left date the must become active', () => {
    renderWithTheme(<CalendarTab />)

    const todayEl = screen.getByLabelText(tomorow)
    todayEl.click()
    expect(todayEl).toHaveStyle({ background: theme.colors.light[500] })
  })

  it('should click in today and must return a date', () => {
    const onClickDate = jest.fn()
    renderWithTheme(<CalendarTab onClickDate={onClickDate} />)

    const todayEl = screen.getByLabelText(todayDate)
    todayEl.click()
    expect(onClickDate).toBeCalledTimes(1)
  })

  it('should click to scroll 2 times to left atual day must be aria hidden true', () => {
    renderWithTheme(<CalendarTab />)

    const todayEl = screen.getByLabelText(todayDate)
    const prevButton = screen.getByLabelText('Previous')
    prevButton.click()
    prevButton.click()
    expect(todayEl.parentNode?.parentNode).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })

  it('should click to scroll 2 times to right atual day must be aria hidden true', () => {
    renderWithTheme(<CalendarTab />)

    const todayEl = screen.getByLabelText(todayDate)
    const nextButton = screen.getByLabelText('Next')
    nextButton.click()
    nextButton.click()
    expect(todayEl.parentNode?.parentNode).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })
})
