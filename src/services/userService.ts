import { User, createUser } from '../models/user.js';

const users: User[] = [];

export const getUsers = (): User[] => users;

export const getUserById = (id: string): User | undefined => users.find(user => user.id === id);

export const addUser = (login: string, password: string): User => {
  const user = createUser(login, password);
  users.push(user);
  return user;
};

export const updateUser = (id: string, login: string, password: string): User | undefined => {
  const user = users.find(user => user.id === id);
  if (user) {
    user.login = login;
    user.password = password;
    user.version += 1;
    user.updatedAt = Date.now();
  }
  return user;
};

export const deleteUser = (id: string): boolean => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
};