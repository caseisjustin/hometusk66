import { Album, createAlbum } from '../models/album.js';

const albums: Album[] = [];

export const getAlbums = (): Album[] => albums;

export const getAlbumById = (id: string): Album | undefined => albums.find(album => album.id === id);

export const addAlbum = (name: string, year: number, artistId: string | null): Album => {
  const album = createAlbum(name, year, artistId);
  albums.push(album);
  return album;
};

export const updateAlbum = (id: string, name: string, year: number, artistId: string | null): Album | undefined => {
  const album = albums.find(album => album.id === id);
  if (album) {
    album.name = name;
    album.year = year;
    album.artistId = artistId;
  }
  return album;
};

export const deleteAlbum = (id: string): boolean => {
  const index = albums.findIndex(album => album.id === id);
  if (index !== -1) {
    albums.splice(index, 1);
    return true;
  }
  return false;
};