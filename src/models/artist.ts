import { v4 as uuidv4 } from 'uuid';

export interface Artist {
  id: string;
  name: string;
  grammy: boolean;
}

export const createArtist = (name: string, grammy: boolean): Artist => ({
  id: uuidv4(),
  name,
  grammy
});