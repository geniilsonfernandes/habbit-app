import { DefaultTheme, css } from 'styled-components'

const stylesModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.green[600]};
    border: 3px solid ${theme.colors.habit.green[500]};
  `,
  delayed: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.orange[600]};
    border: 3px solid ${theme.colors.habit.orange[500]};
  `,
  failed: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.red[600]};
    border: 3px solid ${theme.colors.habit.red[500]};
  `,
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.habit.default[600]};
    border: 3px solid ${theme.colors.habit.default[500]};
  `,
}
export { stylesModifiers }
