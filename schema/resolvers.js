const API_KEY = '4891255ea64aca39065617a0cef1c045';

const resolvers = {
  Query: {
    searchMovie: async (parent, args) => {
        const searchTerm = args.query;
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`, { method: 'GET' });
        const data = await res.json();

        return data.results;
    },
    movieDetail: async (parent, args) => {
        const movieId = args.id;
        const firstResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`, { method: 'GET' });
        const movieData = await firstResponse.json();

        const secondResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`, { method: 'GET' });
        const castData = await secondResponse.json();

        movieData.cast = castData.cast.slice(0, 4);

        return movieData;
    },
    personDetail: async (parent, args) => {
        const personId = args.id;
        const res = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}`, { method: 'GET' });
        const data = await res.json();

        return data;
    }
  }
};

module.exports = { resolvers };