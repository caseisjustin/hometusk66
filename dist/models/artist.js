import { v4 as uuidv4 } from 'uuid';
export const createArtist = (name, grammy) => ({
    id: uuidv4(),
    name,
    grammy
});
