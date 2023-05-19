import dayjs from 'dayjs'
import { HabitStatus } from 'services/types'
import { v4 as uuidv4 } from 'uuid'

export interface IHabitRecordPayload {
  user_id: string
  date: Date
  progress: HabitStatus
  habit_id: string
}

class HabitRecord {
  id: string
  user_id: string
  habit_id: string
  date: Date
  progress: HabitStatus
  created_at: Date
  updated_at?: Date
  date_view?: string

  constructor({ user_id, date, progress, habit_id }: IHabitRecordPayload) {
    this.id = uuidv4()
    this.created_at = new Date()
    this.user_id = user_id
    this.habit_id = habit_id
    this.date = new Date(date)
    this.date_view = dayjs(date).format('DD/MM/YYYY')
    this.progress = progress
  }
}

export default HabitRecord
