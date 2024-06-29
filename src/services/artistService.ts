import { Artist, createArtist } from '../models/artist.js';

const artists: Artist[] = [];

export const getArtists = (): Artist[] => artists;

export const getArtistById = (id: string): Artist | undefined => artists.find(artist => artist.id === id);

export const addArtist = (name: string, grammy: boolean): Artist => {
  const artist = createArtist(name, grammy);
  artists.push(artist);
  return artist;
};

export const updateArtist = (id: string, name: string, grammy: boolean): Artist | undefined => {
  const artist = artists.find(artist => artist.id === id);
  if (artist) {
    artist.name = name;
    artist.grammy = grammy;
  }
  return artist;
};

export const deleteArtist = (id: string): boolean => {
  const index = artists.findIndex(artist => artist.id === id);
  if (index !== -1) {
    artists.splice(index, 1);
    return true;
  }
  return false;
};