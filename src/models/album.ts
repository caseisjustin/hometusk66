import { v4 as uuidv4 } from 'uuid';

export interface Album {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

export const createAlbum = (name: string, year: number, artistId: string | null): Album => ({
  id: uuidv4(),
  name,
  year,
  artistId
});