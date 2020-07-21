import { Movie } from './movie';

export interface Profile {
    _id: string,
    name: string;
    age: string;
    favoriteMovie: Movie;
    favoriteGenre: string;
    favoriteMovieList: Array<Movie>;
}