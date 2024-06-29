import { v4 as uuidv4 } from 'uuid';

export interface Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export const createTrack = (name: string, artistId: string | null, albumId: string | null, duration: number): Track => ({
  id: uuidv4(),
  name,
  artistId,
  albumId,
  duration
});