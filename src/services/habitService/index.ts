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
      const storageHabit = storage.getAll<Habit>(KEYS.HABITS)

      const newHabit = storageHabit.map((habit) => {
        if (habit.id === data.id) {
          return {
            ...habit,
            category: data.category,
            color: data.color,
            interval: data.frequency,
            name: data.habit,
          }
        }
        return habit
      })

      storage.update(KEYS.HABITS, newHabit)
      return
    }

    const newHabit = new Habit(data)
    storage.save(KEYS.HABITS, newHabit)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getByDate(date: Date): Promise<any> {
    const storageHabit = storage.getAll<Habit>(KEYS.HABITS)
    const storageProgress = storage.getAll<HabitRecord>(KEYS.PROGRESS)

    const filterByUser = storageHabit.filter(
      (habit) => habit.user_id === user_id,
    )

    const filterProgressByUser = storageProgress.filter(
      (progress) => progress.user_id === user_id,
    )
    const day = dayjs(date)

    const filterByDate = filterByUser.map((habit) => {
      const finderProgress = filterProgressByUser.find(
        (progress) =>
          dayjs(progress.date).isSame(day, 'day') &&
          progress.habit_id === habit.id,
      )

      return {
        ...habit,
        date: day.toDate(),
        progress_day: finderProgress || {
          id: null,
          habit_id: habit.id,
          user_id: user_id,
          date: day.toDate(),
          progress: 'default',
        },
      }
    })

    return filterByDate
  }

  static async getAll(): Promise<IGetAllHabitsResponse> {
    const storageHabit = storage.getAll<Habit>(KEYS.HABITS)
    const storageProgress = storage.getAll<HabitRecord>(KEYS.PROGRESS)

    const filterByUser = storageHabit.filter(
      (habit) => habit.user_id === user_id,
    )

    const filterProgressByUser = storageProgress.filter(
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
        lastEightDays: lastEightDays(finderAllProgress).reverse(),
      }
    })

    return {
      habit: createHabitWithProgress,
    }
  }

  static async get(id: string): Promise<IGetHabitResponse> {
    const storageHabit = storage.getAll<Habit>(KEYS.HABITS)
    const progress = storage.getAll<HabitRecord>(KEYS.PROGRESS)
    const findHabit = storageHabit.find((habit) => habit.id === id)
    if (!findHabit) {
      throw new Error('Habit not found')
    }

    const filterProgressByUser = progress.filter(
      (progress) => progress.user_id === user_id && progress.habit_id === id,
    )

    const filterByMonth: Array<HabitRecord[]> = Array.from(
      { length: 12 },
      () => [],
    )

    filterProgressByUser.forEach((progress) => {
      const month = dayjs(progress.date).month()
      filterByMonth[month].push(progress)
    })

    return {
      ...findHabit,
      progress: filterProgressByUser,
      months: filterByMonth,
    }
  }

  static async saveProgress({
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
    const storageHabit = storage.getAll<Habit>(KEYS.HABITS)

    const newHabit = storageHabit.filter((habit) => habit.id !== id)

    storage.update(KEYS.HABITS, newHabit)
  }
}

export { HabitService, Habit }
