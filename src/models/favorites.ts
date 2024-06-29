export interface Favorites {
    artists: string[];
    albums: string[];
    tracks: string[];
  }
  
  export const defaultFavorites: Favorites = {
    artists: [],
    albums: [],
    tracks: []
  };