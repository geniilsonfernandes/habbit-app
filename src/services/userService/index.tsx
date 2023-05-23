/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocalStorage } from 'services/localStorage'

const storage = new LocalStorage()
class UserService {
  static getUserInfo() {
    return storage.getAll('@user')
  }

  static setUserInfo(user: any) {
    storage.save('@user', user)
  }

  static removeUserInfo() {
    storage.deleteAll('@user')
  }
}

export { UserService }
