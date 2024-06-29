import { v4 as uuidv4 } from 'uuid';
export const createAlbum = (name, year, artistId) => ({
    id: uuidv4(),
    name,
    year,
    artistId
});
