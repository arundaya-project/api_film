import MovieContainer from '@/components/MovieContainer';
import Footer from '@/components/Footer';
import { Movie } from '@/types/movie';

async function getMovies(): Promise<Movie[]> {
  const res = await fetch('http://localhost:3000/api/movies', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  return res.json();
}

export default async function Home() {
  const movies = await getMovies();
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Movie Collection
          </h1>
          <p className="text-gray-600 mt-2">Discover our curated list of movies</p>
        </header>
        <MovieContainer initialMovies={movies} />
      </main>
      <Footer />
    </div>
  );
}
