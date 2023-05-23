import dayjs from 'dayjs'
import client from 'libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const user = '646be0c1c1388e2ec1358ed9'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      try {
        const { date } = req.query as { date: string }

        const utcdate = new Date(date).setHours(0, 0, 0, 0)

        const habits = await client.habit.findMany({
          where: {
            user_id: user,
          },
          select: {
            id: true,
            name: true,
            category: true,
            color: true,
            interval: true,
            user_id: true,
            deleted_at: true,
            record: {
              select: {
                id: true,
                created_at: true,
                progress: true,
                date: true,
              },
              ...(date && {
                where: {
                  date: dayjs(utcdate).toDate(),
                },
              }),
            },
          },
        })

        const filterDeletedNotNull = habits.filter(
          (habit) => habit.deleted_at === null,
        )
        res.status(200).json(filterDeletedNotNull)
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' })
      }
      break
    }
    case 'POST':
      {
        try {
          const { name, category, color, interval } = req.body
          const newHabit = await client.habit.create({
            data: {
              name,
              category,
              color,
              interval,
              user_id: user,
            },
          })
          res.status(200).json(newHabit)
        } catch (error) {
          console.log(error)
          res.status(500).json({ message: 'Something went wrong' })
        }
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
