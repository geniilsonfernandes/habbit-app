import * as S from './styles'

export type HeaderProps = {
  title?: React.ReactNode
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
  goBack?: () => void
  edit?: () => void
}

const Header = ({
  title,
  leftComponent,
  rightComponent,
  goBack,
  edit,
}: HeaderProps) => (
  <S.Wrapper aria-describedby="header">
    <S.Left>
      {!goBack && leftComponent && <>{leftComponent}</>}
      {goBack && (
        <S.Button onClick={goBack} aria-label="go back">
          <S.GoBack />
        </S.Button>
      )}
    </S.Left>
    <S.Title>{title}</S.Title>
    <S.Right>
      {rightComponent && !edit && <>{rightComponent}</>}
      {edit && (
        <S.Button onClick={edit} align="right" aria-label="edit">
          <S.Edit />
        </S.Button>
      )}
    </S.Right>
  </S.Wrapper>
)

export default Header
