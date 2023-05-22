import { Status } from 'shared/habit/helper/statusMap'
import { stylesModifiers } from 'shared/habit/styles/modifiers/stylesModifiers'
import styled, { css } from 'styled-components'
export const History = styled.div``

const SETTINGS = {
  width: 24,
}

export const HistoryWeekWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  margin: 16px 0;
  margin-top: 0;
  height: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const HistoryLegendTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 16px;
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(7, ${SETTINGS.width}px);

    gap: 8px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${SETTINGS.width}px;
      color: ${({ theme }) => theme.colors.text[400]};
    }
  }
`

export const HistoryWeekLegendGrid = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      display: flex;

      color: ${theme.colors.text[400]};
      font-size: ${theme.font.sizes.xsmall};
      height: ${SETTINGS.width}px;
    }
  `}
`

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${SETTINGS.width}px);
  gap: 8px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

type DayProps = {
  status?: Status
  available?: boolean
}
export const Day = styled.div<DayProps>`
  ${({ theme, status = 'default', available = true }) => css`
    font-size: 10px;
    color: ${theme.colors.text[100]};
    background: ${theme.colors.primary[100]};
    opacity: ${status !== 'default' ? 1 : 0.4};
    width: ${SETTINGS.width}px;
    height: ${SETTINGS.width}px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${stylesModifiers[status](theme)}
    border-width: 2px;
    border-radius: 4px;

    opacity: ${available ? 1 : 0.1};
  `}
`
