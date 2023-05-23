import client from 'libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { nickname } = req.body

    const newUser = await client.user.create({
      data: {
        nickname: String(nickname),
      },
    })

    setCookie({ res }, '@habit/user', String(newUser.id), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    setCookie({ res }, '@habit/nickname', String(newUser.nickname), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export default handler
