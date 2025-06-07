import { getUser } from './get-user'
import { addUser } from './add-user'
import { sessions } from './sessions'
import { useRoutes } from 'react-router-dom'
export const server = {
  async logout(session) {
    sessions.remove(session)
  },
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin)
    if (!user) {
      return {
        error: 'Пользователь не найден',
        res: null,
      }
    }

    if (user.password !== authPassword) {
      return {
        error: 'Неверный пароль',
        res: null,
      }
    }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },
  async register(regLogin, regPassword) {
    const existedUser = await getUser(regLogin)

    if (existedUser) {
      return {
        error: 'Пользователь с таким логином уже существует',
        res: null,
      }
    }

    await addUser(regLogin, regPassword)
    const user = await getUser(regLogin)
    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },
}
