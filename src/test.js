const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime'],
    score: 9.2
  },
  {
    title: 'The A',
    year: 1972,
    director: 'Steven Spielberg',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  }
];

function bestYearAvg(array) {
  const yearAvr = array.sort((a, b) => {
    if ((a.year = b.year)) {
      const sumScores = array.reduce(function (sum, currentMovie) {
        return (sum + currentMovie.score);
      }, 0);
    } else {
      console.log('oops');
    }
  });
}

bestYearAvg(movies);
