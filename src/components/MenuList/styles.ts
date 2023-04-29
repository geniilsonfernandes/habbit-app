import styled, { DefaultTheme, css } from 'styled-components'
import { RiHome3Fill, RiBookMarkFill, RiFolderOpenFill } from 'react-icons/ri'

type Props = {
  isMobile?: boolean
}

type MenuItemProps = {
  isActived?: boolean
} & Props

const WrapperModifiers = {
  mobile: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1.6rem;

    height: 96px;
    background: ${theme.colors.background[800]};
    border-top: 1px solid ${theme.colors.primary[100]};
  `,
}

export const Wrapper = styled.div<Props>`
  ${({ theme, isMobile }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    ${isMobile && WrapperModifiers.mobile(theme)}
  `}
`

const MenuModifiers = {
  mobile: css`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  isActive: (theme: DefaultTheme) => css`
    color: ${theme.colors.text[100]};
    background: ${theme.colors.primary[100]};

    &:hover {
      color: ${theme.colors.text[100]};
      background: ${theme.colors.primary[200]};
    }
  `,
}

export const MenuItem = styled.div<MenuItemProps>`
  ${({ theme, isMobile, isActived }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.text[400]};
    transition: ${theme.transitions.ease_in_out};
    border-radius: ${theme.radius.md};
    &:hover {
      color: ${theme.colors.text[100]};
      background: ${theme.colors.background[800]};
    }

    ${isMobile && MenuModifiers.mobile}
    ${isActived && MenuModifiers.isActive(theme)}
  `}
`
const iconCSS = (theme: DefaultTheme) => css`
  font-size: ${theme.font.sizes.large};
  transition: ${theme.transitions.bounce};
  color: inherit;
`

export const HomeIcon = styled(RiHome3Fill)`
  ${({ theme }) => css`
    ${iconCSS(theme)}
  `}
`
export const habitIcon = styled(RiBookMarkFill)`
  ${({ theme }) => css`
    ${iconCSS(theme)}
  `}
`
export const CategoryIcon = styled(RiFolderOpenFill)`
  ${({ theme }) => css`
    ${iconCSS(theme)}
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    transition: ${theme.transitions.bounce};
    font-size: ${theme.font.sizes.xsmall};
    color: inherit;
  `}
`
