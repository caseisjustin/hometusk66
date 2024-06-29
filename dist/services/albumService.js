import { createAlbum } from '../models/album.js';
const albums = [];
export const getAlbums = () => albums;
export const getAlbumById = (id) => albums.find(album => album.id === id);
export const addAlbum = (name, year, artistId) => {
    const album = createAlbum(name, year, artistId);
    albums.push(album);
    return album;
};
export const updateAlbum = (id, name, year, artistId) => {
    const album = albums.find(album => album.id === id);
    if (album) {
        album.name = name;
        album.year = year;
        album.artistId = artistId;
    }
    return album;
};
export const deleteAlbum = (id) => {
    const index = albums.findIndex(album => album.id === id);
    if (index !== -1) {
        albums.splice(index, 1);
        return true;
    }
    return false;
};
