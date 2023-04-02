import { SearchForm } from '../components/SearchForm/SearchForm';
import { MoviesList } from '../components/MoviesList/MoviesList';

export const Movies = () => {
  return (
    <main>
      <SearchForm />
      <MoviesList />
      {/* <div>No movies...</div> */}
    </main>
  );
};
