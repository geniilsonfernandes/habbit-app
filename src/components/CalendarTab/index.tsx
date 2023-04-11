import dayjs from 'dayjs'
import * as S from './styles'
import Slider, { Settings } from 'react-slick'
import { useEffect, useRef, useState } from 'react'
import { createDatesRange } from 'utils/createDatesRange'

type CalendarTabProps = {
  onClickDate?: (date: Date) => void
}

const CalendarTab = ({ onClickDate }: CalendarTabProps) => {
  const [activeDate, setActiveDate] = useState<Date>()
  const rangeperiod = 13
  const dates = createDatesRange(rangeperiod)
  const sliderRef = useRef<Slider>(null)

  const settings: Settings = {
    slidesToShow: 9,
    slidesToScroll: 3,
    infinite: false,
    centerPadding: '40px',
    arrows: false,
  }

  const handleNext = () => {
    sliderRef.current?.slickNext()
  }

  const handlePrev = () => {
    sliderRef.current?.slickPrev()
  }

  const handleDateClick = (date: Date) => {
    setActiveDate(date)
    onClickDate && onClickDate(date)
  }

  useEffect(() => {
    sliderRef.current?.slickGoTo(rangeperiod - 4)
  }, [])

  return (
    <S.Wrapper>
      <S.Button onClick={handlePrev} aria-label="Previous">
        <S.ArrowLeft />
      </S.Button>
      <S.SliderWrapper aria-label="Calendar">
        <Slider ref={sliderRef} {...settings}>
          {dates.map((date, i) => (
            <S.Date
              key={i}
              isToday={dayjs().isSame(date, 'day')}
              isActive={dayjs(activeDate).isSame(date, 'day')}
              onClick={() => handleDateClick(date)}
              aria-label={dayjs(date).format('DD/MM/YYYY')}
            >
              {dayjs(date).format('DD')}

              <S.DayName>{dayjs(date).format('ddd')}</S.DayName>
            </S.Date>
          ))}
        </Slider>
      </S.SliderWrapper>
      <S.Button onClick={handleNext} aria-label="Next">
        <S.ArrowRight />
      </S.Button>
    </S.Wrapper>
  )
}

export default CalendarTab
