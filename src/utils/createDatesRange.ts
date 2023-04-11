function createDatesRange(rangeDaysAround = 30) {
  const currentDate = new Date()

  const futureDate = new Date(
    currentDate.getTime() + rangeDaysAround * 24 * 60 * 60 * 1000,
  )

  const pastDate = new Date(
    currentDate.getTime() - rangeDaysAround * 24 * 60 * 60 * 1000,
  )

  const dates = []

  for (
    let date = pastDate;
    date <= futureDate;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date))
  }

  return dates
}

export { createDatesRange }
