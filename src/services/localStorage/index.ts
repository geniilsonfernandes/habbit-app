class LocalStorage {
  save<T>(key: string, data: T): void {
    const storedData = localStorage.getItem(key)

    if (storedData) {
      const parsedData = JSON.parse(storedData) as T[]

      localStorage.setItem(key, JSON.stringify([...parsedData, data]))
      return
    }
    localStorage.setItem(key, JSON.stringify([data]))
  }

  getAll<T>(key: string): T[] {
    const storedData = localStorage.getItem(key)
    if (storedData) {
      return JSON.parse(storedData) as T[]
    }
    return []
  }

  update<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data))
  }

  delete<T>(key: string, id: string): void {
    const storedData = localStorage.getItem(key)

    if (storedData) {
      const parsedData = JSON.parse(storedData) as T[]

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newData = parsedData.filter((data: any) => data.id !== id)

      localStorage.setItem(key, JSON.stringify(newData))
    }
  }

  deleteAll(key: string): void {
    localStorage.removeItem(key)
  }
}

export { LocalStorage }
