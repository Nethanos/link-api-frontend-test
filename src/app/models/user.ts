import { Movie } from './movie';

export interface User {
    id: string,
    name: string;
    favoriteMovie: Movie;
    favoriteGenre: string;
}