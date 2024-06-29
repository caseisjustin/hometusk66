import { Favorites, defaultFavorites } from '../models/favorites.js';

let favorites: Favorites = { ...defaultFavorites };

export const getFavorites = (): Favorites => favorites;

export const addFavoriteArtist = (artistId: string): boolean => {
  if (!favorites.artists.includes(artistId)) {
    favorites.artists.push(artistId);
    return true;
  }
  return false;
};

export const addFavoriteAlbum = (albumId: string): boolean => {
  if (!favorites.albums.includes(albumId)) {
    favorites.albums.push(albumId);
    return true;
  }
  return false;
};

export const addFavoriteTrack = (trackId: string): boolean => {
  if (!favorites.tracks.includes(trackId)) {
    favorites.tracks.push(trackId);
    return true;
  }
  return false;
};

export const removeFavoriteArtist = (artistId: string): boolean => {
  const index = favorites.artists.indexOf(artistId);
  if (index !== -1) {
    favorites.artists.splice(index, 1);
    return true;
  }
  return false;
};

export const removeFavoriteAlbum = (albumId: string): boolean => {
  const index = favorites.albums.indexOf(albumId);
  if (index !== -1) {
    favorites.albums.splice(index, 1);
    return true;
  }
  return false;
};

export const removeFavoriteTrack = (trackId: string): boolean => {
  const index = favorites.tracks.indexOf(trackId);
  if (index !== -1) {
    favorites.tracks.splice(index, 1);
    return true;
  }
  return false;
};

export const cleanUpFavorites = (entityId: string): void => {
  favorites.artists = favorites.artists.filter(id => id !== entityId);
  favorites.albums = favorites.albums.filter(id => id !== entityId);
  favorites.tracks = favorites.tracks.filter(id => id !== entityId);
};
