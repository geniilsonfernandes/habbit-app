import styled, { css } from 'styled-components'
import { MdKeyboardArrowLeft, MdEdit } from 'react-icons/md'

export const Wrapper = styled.div`
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
export const Left = styled.div``
export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.text[100]};
    font-weight: ${theme.font.normal};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`
export const Right = styled.div``

type ButtonProps = {
  align?: 'left' | 'right'
}
export const Button = styled.button<ButtonProps>`
  ${({ theme, align = 'left' }) => css`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: ${align};

    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: ${theme.radius.md};
  `}
`

export const GoBack = styled(MdKeyboardArrowLeft)`
  ${({ theme }) => css`
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
export const Edit = styled(MdEdit)`
  ${({ theme }) => css`
    color: ${theme.colors.text[100]};
    font-size: ${theme.font.sizes.xlarge};
  `}
`
