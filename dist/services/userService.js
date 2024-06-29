import { createUser } from '../models/user.js';
const users = [];
export const getUsers = () => users;
export const getUserById = (id) => users.find(user => user.id === id);
export const addUser = (login, password) => {
    const user = createUser(login, password);
    users.push(user);
    return user;
};
export const updateUser = (id, login, password) => {
    const user = users.find(user => user.id === id);
    if (user) {
        user.login = login;
        user.password = password;
        user.version += 1;
        user.updatedAt = Date.now();
    }
    return user;
};
export const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};
