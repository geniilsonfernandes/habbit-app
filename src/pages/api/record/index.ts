import client from 'libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PUT': {
      try {
        const { progress, day_id } = req.body

        const updatedRecord = await client.record.update({
          where: {
            id: day_id,
          },
          data: {
            progress: String(progress),
          },
        })

        res.status(200).json(updatedRecord)
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong' })
      }
      break
    }
    case 'POST':
      {
        try {
          const { progress, date, habit_id } = req.body
          const newRecord = await client.record.create({
            data: {
              progress: String(progress),
              date: new Date(date),
              habit_id: String(habit_id),
            },
          })
          res.status(200).json(newRecord)
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
