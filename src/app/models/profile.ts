import { Movie } from './movie';

export interface Profile {
    id: string,
    name: string;
    age: string;
    favoriteMovie: Movie;
    favoriteGenre: string;
}