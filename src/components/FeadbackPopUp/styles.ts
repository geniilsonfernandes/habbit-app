import styled, { css } from 'styled-components'

export type FeadBackMessageProps = {
  status: 'success' | 'error'
}

export const FeadBackMessage = styled.div<FeadBackMessageProps>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.xsmall};
    color: ${status === 'success'
      ? theme.colors.success[100]
      : theme.colors.error[100]};

    padding: ${theme.spacings.medium} 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`
export const BackButton = styled.button`
  ${({ theme }) => css`
    height: 48px;
    width: 100%;
    border-radius: ${theme.radius.md};
    background: ${theme.colors.background[700]};

    border: none;

    cursor: pointer;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text[100]};
  `}
`
export const MessageTitle = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    max-width: 80%;
    text-align: center;
  `}
`
