import styled, { css } from 'styled-components'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border-radius: 15px;
    gap: 0.4rem;

    transition: ${theme.transitions.bounce};
    background: transparent;
    &:hover {
      background-color: ${theme.colors.background[500]};
    }
    padding: 0 4px;
  `}
`
export const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;

  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background[400]};
`

export const Avatarletter = styled.div`
  ${({ theme }) => css`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background[400]};
    color: ${theme.colors.text[100]};
    font-size: 0.8rem;
    font-weight: 500;
  `}
`

export const ArrowDown = styled(RiArrowDropDownLine)`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    color: ${theme.colors.text[100]};
  `}
`
