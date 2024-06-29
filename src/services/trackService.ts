import { Track, createTrack } from '../models/track.js';

const tracks: Track[] = [];

export const getTracks = (): Track[] => tracks;

export const getTrackById = (id: string): Track | undefined => tracks.find(track => track.id === id);

export const addTrack = (name: string, artistId: string | null, albumId: string | null, duration: number): Track => {
  const track = createTrack(name, artistId, albumId, duration);
  tracks.push(track);
  return track;
};

export const updateTrack = (id: string, name: string, artistId: string | null, albumId: string | null, duration: number): Track | undefined => {
  const track = tracks.find(track => track.id === id);
  if (track) {
    track.name = name;
    track.artistId = artistId;
    track.albumId = albumId;
    track.duration = duration;
  }
  return track;
};

export const deleteTrack = (id: string): boolean => {
  const index = tracks.findIndex(track => track.id === id);
  if (index !== -1) {
    tracks.splice(index, 1);
    return true;
  }
  return false;
};