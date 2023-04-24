import * as S from './styles'

export type UserAvatarProps = {
  avatarUrl?: string
  name: string
  onClick: () => void
}
const UserAvatar = ({ avatarUrl, name, onClick }: UserAvatarProps) => (
  <S.Wrapper onClick={onClick} aria-label={name} title={name}>
    {avatarUrl && <S.Avatar src={avatarUrl} alt={name} title={name} />}
    {!avatarUrl && <S.Avatarletter>{name.charAt(0)}</S.Avatarletter>}
    <S.ArrowDown title="Arrow down" />
  </S.Wrapper>
)

export default UserAvatar
