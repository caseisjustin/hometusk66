import { createTrack } from '../models/track.js';
const tracks = [];
export const getTracks = () => tracks;
export const getTrackById = (id) => tracks.find(track => track.id === id);
export const addTrack = (name, artistId, albumId, duration) => {
    const track = createTrack(name, artistId, albumId, duration);
    tracks.push(track);
    return track;
};
export const updateTrack = (id, name, artistId, albumId, duration) => {
    const track = tracks.find(track => track.id === id);
    if (track) {
        track.name = name;
        track.artistId = artistId;
        track.albumId = albumId;
        track.duration = duration;
    }
    return track;
};
export const deleteTrack = (id) => {
    const index = tracks.findIndex(track => track.id === id);
    if (index !== -1) {
        tracks.splice(index, 1);
        return true;
    }
    return false;
};
