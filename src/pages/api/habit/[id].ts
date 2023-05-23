import client from 'libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      {
        try {
          const id = req.query.id as string

          const habit = await client.habit.findUnique({
            where: {
              id,
            },
            select: {
              id: true,
              name: true,
              category: true,
              color: true,
              interval: true,
              user_id: true,
              record: {
                select: {
                  id: true,
                  created_at: true,
                  progress: true,
                  date: true,
                },
              },
            },
          })

          res.status(200).json(habit)
        } catch (error) {
          console.log(error)
          res.status(500).json({ message: 'Something went wrong' })
        }
      }
      break
    case 'PUT':
      {
        try {
          const id = req.query.id as string
          const { name, category, color, interval } = req.body

          const updatedHabit = await client.habit.update({
            where: {
              id,
            },
            data: {
              name,
              category,
              color,
              interval,
            },
          })

          res.status(200).json(updatedHabit)
        } catch (error) {
          console.log(error)
          res.status(500).json({ message: 'Something went wrong' })
        }
      }
      break
    case 'DELETE':
      {
        try {
          const id = req.query.id as string

          const deletedHabit = await client.habit.update({
            where: {
              id,
            },
            data: {
              deleted_at: new Date(),
            },
          })

          res.status(200).json(deletedHabit)
        } catch (error) {
          console.log(error)
          res.status(500).json({ message: 'Something went wrong' })
        }
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default handler
