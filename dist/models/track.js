import { v4 as uuidv4 } from 'uuid';
export const createTrack = (name, artistId, albumId, duration) => ({
    id: uuidv4(),
    name,
    artistId,
    albumId,
    duration
});
