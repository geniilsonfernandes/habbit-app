import styled, { css } from 'styled-components'
import { FiMenu } from 'react-icons/fi'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LeftSide = styled.div``

export const MenuToggle = styled(FiMenu)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.text[100]};
    cursor: pointer;
  `}
`

export const RightSide = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.text[100]};
    font-weight: ${theme.font.bold};
  `}
`
