import * as S from './styles'

export type HeadProps = {
  title: string
}
const Head = ({ title }: HeadProps) => {
  return (
    <S.Wrapper>
      <S.LeftSide></S.LeftSide>
      <S.Title>{title}</S.Title>
      <S.RightSide></S.RightSide>
    </S.Wrapper>
  )
}

export default Head
