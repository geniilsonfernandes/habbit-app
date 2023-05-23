/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs'
import api from 'libs/axios'
import Habit from 'services/entities/Habit'
import HabitRecord from 'services/entities/HabitRecord'
import { LocalStorage } from 'services/localStorage'
import { HabitStatus } from 'services/types'

const storage = new LocalStorage()

const KEYS = {
  HABITS: '@HABBIT/habits',
  PROGRESS: '@HABBIT/progress',
}

type HabitSavePayload = {
  user_id: string
  habit_id: string
  data: {
    day_id: string | null
    date: Date
    progress: HabitStatus
  }
}

type HabitCreatePayload = {
  habit: string
  category: string | null
  frequency: string[]
  color: string
  user_id: string

  id?: string
}

export interface IGetAllHabitsResponse {
  habit: {
    progress: string[]
    lastEightDays: {
      date: Date
      progress: HabitStatus
      id: string | null
      date_view: {
        day: string
        nm_day: string
        month: string
      }
    }[]
    id: string
    name: string
    category: string | null
    color: string
    interval: string[]
    user_id: string
    created_at: Date
  }[]
}
export interface IGetHabitResponse {
  progress: HabitRecord[]
  months: Array<HabitRecord[]>
  id: string
  name: string
  category: string | null
  color: string
  interval: string[]
  user_id: string
  created_at: Date
}

const user_id = '101'

class HabitService {
  static async create(data: HabitCreatePayload): Promise<void> {
    if (data.id) {
      const { id, ...rest } = data

      await api.put(`/habit/${id}`, {
        name: rest.habit,
        category: rest.category,
        color: rest.color,
        interval: rest.frequency,
      })

      return
    }

    await api.post('/habit', {
      name: data.habit,
      category: data.category,
      color: data.color,
      interval: data.frequency,
    })
    const newHabit = new Habit(data)
    storage.save(KEYS.HABITS, newHabit)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getByDate(date: Date): Promise<any> {
    const { data } = await api.get('/habit', {
      params: {
        date,
      },
    })

    const dateutc = new Date(date).setHours(0, 0, 0, 0)
    const day = dayjs(dateutc)

    const habits = data.map((habit: any) => {
      return {
        ...habit,
        date: habit.date,
        progress_day: habit.record[0] || {
          id: null,
          habit_id: habit.id,
          user_id: user_id,
          date: day.toDate(),
          progress: 'default',
        },
      }
    })

    return habits
  }

  static async getAll(): Promise<IGetAllHabitsResponse> {
    const { data } = await api.get('/habit')

    const record = data

    const createHabit = record.map((habit: any) => {
      return {
        ...habit,
        lastEightDays: Array(8)
          .fill(null)
          .map((_, index) => {
            const today = dayjs().startOf('day')
            const pastDate = today.subtract(index, 'day')
            const progressAlreadySaved = habit.record.find((progress: any) =>
              dayjs(progress.date).isSame(pastDate, 'day'),
            )
            return {
              date: pastDate.toDate(),
              progress: progressAlreadySaved?.progress || 'default',
              id: progressAlreadySaved ? progressAlreadySaved.id : null,
              date_view: {
                day: pastDate.format('DD'),
                nm_day: pastDate.format('ddd'),
                month: pastDate.format('MMM'),
              },
            }
          })
          .reverse(),
      }
    })

    return {
      habit: createHabit,
    }
  }

  static async get(id: string): Promise<IGetHabitResponse> {
    const { data } = await api.get(`/habit/${id}`)

    const { record } = data

    if (!data) {
      throw new Error('Habit not found')
    }

    const filterByMonth: Array<HabitRecord[]> = Array.from(
      { length: 12 },
      () => [],
    )

    record.forEach((progress: any) => {
      const month = dayjs(progress.date).month()
      filterByMonth[month].push(progress)
    })

    return {
      ...data,
      progress: record,
      months: filterByMonth,
    }
  }

  static async saveProgress({
    habit_id,
    data,
  }: HabitSavePayload): Promise<void> {
    const { date, progress, day_id } = data

    if (day_id) {
      await api.put(`/record`, {
        day_id,
        progress,
      })

      return
    }

    await api.post(`/record`, {
      habit_id,
      date,
      progress,
      user_id: '646be0c1c1388e2ec1358ed9',
    })
  }

  static async delete(id: string): Promise<void> {
    await api.delete(`/habit/${id}`)
  }
}

export { HabitService, Habit }
