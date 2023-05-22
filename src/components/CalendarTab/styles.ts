import styled, { DefaultTheme, css } from 'styled-components'
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md'

type DayProps = {
  isToday?: boolean
  isActive?: boolean
}

export const Wrapper = styled.div`
  display: flex;
`
export const SliderWrapper = styled.div`
  width: 82%;

  @media (max-width: 768px) {
    width: 88%;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-slider .slick-slide {
    padding: 0 4px;
  }
`

const DayModifier = {
  today: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary.gradient[100]};
  `,
  isActive: (theme: DefaultTheme) => css`
    background: ${theme.colors.background[300]};
  `,
}

export const Date = styled.div<DayProps>`
  ${({ theme, isToday, isActive }) => css`
    user-select: none;
    height: 38px;

    border-radius: ${theme.radius.md};
    cursor: pointer;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.xsmall};
    &:active {
      transform: scale(0.95);
    }

    transition: all 0.2s ease-in-out;

    background: ${theme.colors.background[600]};
    ${isActive && DayModifier.isActive(theme)}
    ${isToday && DayModifier.today(theme)}
  `}
`

export const DayName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text[100]};
    font-size: 0.6rem;
  `}
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: transparent;
`

export const ArrowLeft = styled(MdOutlineKeyboardArrowLeft)`
  ${({ theme }) => css`
    color: ${theme.colors.text[300]};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  ${({ theme }) => css`
    color: ${theme.colors.text[300]};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`
