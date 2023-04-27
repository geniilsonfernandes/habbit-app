import styled, { css } from 'styled-components'

export type WrapperProps = {
  color: string
  isActive: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ color, theme, isActive }) => css`
    background-color: ${color};
    width: 48px;
    height: 48px;
    border-radius: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border: none;
    outline: none;

    transition: ${theme.transitions.bounce};

    &:disabled {
      opacity: 0.5;
    }

    &:hover {
      filter: brightness(0.9);
    }

    ${isActive &&
    css`
      box-shadow: 0px 0px 0px 4px ${theme.colors.primary[100]};

      filter: brightness(0.9);
      &:hover {
        filter: brightness(1);
      }

      &:disabled {
        opacity: 1;
      }
    `}
  `}
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
