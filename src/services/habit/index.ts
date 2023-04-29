interface HabitData {
  id: number
  name: string
}

class Habit {
  private habits: HabitData[] = []

  constructor() {
    const storedHabits = localStorage.getItem('habits')
    if (storedHabits) {
      this.habits = JSON.parse(storedHabits)
    }
  }

  async createHabit(name: string): Promise<HabitData> {
    const habit: HabitData = { id: Date.now(), name }
    this.habits.push(habit)
    this.saveToLocalStorage()
    return habit
  }

  async listHabits(): Promise<HabitData[]> {
    return this.habits
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('habits', JSON.stringify(this.habits))
  }
}

export { Habit }
