import dayjs from 'dayjs'
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

const user_id = '101'

class HabitService {
  static async create(habit: HabitCreatePayload): Promise<void> {
    const newHabit = new Habit(habit)
    storage.save(KEYS.HABITS, newHabit)
  }

  static async getAll(): Promise<IGetAllHabitsResponse> {
    const storageHabit = storage.getAll<Habit>(KEYS.HABITS)
    const progress = storage.getAll<HabitRecord>(KEYS.PROGRESS)

    const filterByUser = storageHabit.filter(
      (habit) => habit.user_id === user_id,
    )

    const filterProgressByUser = progress.filter(
      (progress) => progress.user_id === user_id,
    )

    const createHabitWithProgress = filterByUser.map((habit) => {
      const finderAllProgress = filterProgressByUser.filter(
        (progress) => progress.habit_id === habit.id,
      )

      const lastEightDays = (progress: HabitRecord[]) => {
        return Array(8)
          .fill(null)
          .map((_, index) => {
            const today = dayjs().startOf('day')
            const pastDate = today.subtract(index, 'day')
            const progressAlreadySaved = progress.find((progress) =>
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
      }

      return {
        ...habit,
        progress: finderAllProgress.map((progress) => progress.id),
        lastEightDays: lastEightDays(finderAllProgress),
      }
    })

    return {
      habit: createHabitWithProgress,
    }
  }

  static async saveProgress({
    user_id,
    habit_id,
    data,
  }: HabitSavePayload): Promise<void> {
    const { date, progress, day_id } = data

    if (day_id) {
      const findProgress = storage
        .getAll<HabitRecord>(KEYS.PROGRESS)
        .filter((progress) => progress.user_id === user_id)

      const newProgressList = findProgress.map((progressDay) => {
        if (progressDay.id === day_id) {
          return {
            ...progressDay,
            progress: progress,
            updated_at: new Date(),
          }
        }
        return progressDay
      })

      storage.update(KEYS.PROGRESS, newProgressList)

      return
    }

    const newProgress = new HabitRecord({
      user_id,
      habit_id,
      date: date,
      progress: progress,
    })

    storage.save(KEYS.PROGRESS, newProgress)
  }

  static async delete(id: string): Promise<void> {
    storage.delete('habits', id)
  }
}

export { HabitService, Habit }
