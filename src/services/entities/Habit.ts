import { v4 as uuidv4 } from 'uuid'

export interface IHabitPayload {
  habit: string
  category: string | null
  frequency: string[]
  color: string
  user_id: string
}

class Habit {
  id: string
  name: string
  category: string | null
  color: string
  interval: string[]
  user_id: string
  created_at: Date
  deleted_at?: Date

  constructor({
    habit: name,
    category,
    frequency: interval,
    color,
    user_id,
  }: IHabitPayload) {
    this.id = uuidv4()
    this.created_at = new Date()
    this.name = name
    this.category = category
    this.interval = interval
    this.user_id = user_id
    this.color = color
  }
}

export default Habit
