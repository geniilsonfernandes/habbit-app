import Loader from 'components/Loader'
import styled, { css } from 'styled-components'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  width?: 'full' | 'auto'
  isDisabled?: boolean
  isLoding?: boolean
}

const sizes = {
  small: () => css`
    height: 42px;
  `,
  medium: () => css`
    height: 52px;
  `,
  large: () => css`
    height: 62px;
  `,
}

export const Wrapper = styled.button.attrs(
  ({ isLoding, isDisabled }: ButtonProps) => ({
    disabled: isLoding || isDisabled,
  }),
)<ButtonProps>`
  ${({ theme, size = 'small', width = 'auto', isDisabled, isLoding }) => css`
    position: relative;
    background-color: ${theme.colors.primary[100]};

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: 500;

    border: none;
    outline: none;
    border-radius: ${theme.radius.sm};
    cursor: pointer;
    text-transform: capitalize;
    transition: ${theme.transitions.bounce};

    &:is(:hover, :focus) {
      background-color: ${theme.colors.primary[200]};
      box-shadow: 0 0 0 0.2rem ${theme.colors.primary[300]};
    }
    &:is(:active) {
      background-color: ${theme.colors.primary[300]};
    }

    color: ${theme.colors.text.white[100]};

    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width === 'full' ? '100%' : 'auto'};
    padding: 0 ${theme.spacings.xsmall};

    ${sizes[size]}

    ${(isDisabled || isLoding) &&
    css`
      cursor: not-allowed;
      background-color: ${theme.colors.dark[300]};
      color: ${theme.colors.text.white[300]};

      &:is(:hover, :focus) {
        background-color: ${theme.colors.dark[300]};
        box-shadow: none;
      }
      &:is(:active) {
        background-color: ${theme.colors.dark[300]};
      }
    `}
  `}
`

export const Loading = styled(Loader)`
  position: absolute;
`

type ContentProps = {
  isLoding?: boolean
}
export const Content = styled.div<ContentProps>`
  ${({ isLoding }) => css`
    opacity: ${isLoding ? 0 : 1};
  `}
`
