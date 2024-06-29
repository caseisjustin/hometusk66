import { createArtist } from '../models/artist.js';
const artists = [];
export const getArtists = () => artists;
export const getArtistById = (id) => artists.find(artist => artist.id === id);
export const addArtist = (name, grammy) => {
    const artist = createArtist(name, grammy);
    artists.push(artist);
    return artist;
};
export const updateArtist = (id, name, grammy) => {
    const artist = artists.find(artist => artist.id === id);
    if (artist) {
        artist.name = name;
        artist.grammy = grammy;
    }
    return artist;
};
export const deleteArtist = (id) => {
    const index = artists.findIndex(artist => artist.id === id);
    if (index !== -1) {
        artists.splice(index, 1);
        return true;
    }
    return false;
};
