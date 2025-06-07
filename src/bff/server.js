import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';
export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);
    if (!user) {
      return {
        error: 'Пользователь не найден',
        res: null,
      };
    }

    if (user.password !== authPassword) {
      return {
        error: 'Неверный пароль',
        res: null,
      };
    }

    const { id, login, role_id } = user;
    const session = sessions.create();
    sessions.add(session);
    return {
      error: null,
      res: {
        id: id,
        login: login,
        roleId: role_id,
        session,
      },
    };
  },
  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: 'Пользователь с таким логином уже существует',
        res: null,
      };
    }

    await addUser(regLogin, regPassword);

    return {
      error: null,
      res: createSession(user.role_id),
    };
  },
};
