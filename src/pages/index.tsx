import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import Home from 'templates/Home'

type IndexProps = {
  user_id: string
  nickname: string
}

export default function Index({ user_id, nickname }: IndexProps) {
  // erro boundary

  return (
    <Home
      user_id={user_id}
      user={{
        name: nickname,
        img: 'https://avatars.githubusercontent.com/u/61945302?v=4',
      }}
    />
  )
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { '@habit/user': user_id } = parseCookies(ctx)
  const { '@habit/nickname': nickname } = parseCookies(ctx)

  return {
    props: {
      user_id: user_id || null,
      nickname: nickname || null,
    },
  }
}
