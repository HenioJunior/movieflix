export type MovieResponse = {
  content: Movie[];
  totalPages: number;   
}

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  year: string;
  imgUrl: string;
  synopsis: string;
  genre: Genre[];
  reviews: Reviews[];
}

export type Genre = {
  id: number;
  name: string;
}

export type Reviews = {
  id: number;
  text: string;
  movieId: number;
  user: User[];
}

export type User = {
  id: number;
  name: string;
  email: string;
}