import { v4 as uuidv4 } from 'uuid';
export const createUser = (login, password) => {
    const timestamp = Date.now();
    return {
        id: uuidv4(),
        login,
        password,
        version: 1,
        createdAt: timestamp,
        updatedAt: timestamp
    };
};
