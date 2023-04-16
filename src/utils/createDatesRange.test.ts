import { createDatesRange } from './createDatesRange'

describe('createDatesRange', () => {
  it('should return an array of dates', () => {
    const dates = createDatesRange(2)

    expect(dates).toHaveLength(5)
    expect(dates[0]).toBeInstanceOf(Date)
  })

  it('should return an array of dates with the default length', () => {
    const dates = createDatesRange()

    expect(dates).toHaveLength(61)
  })
})
