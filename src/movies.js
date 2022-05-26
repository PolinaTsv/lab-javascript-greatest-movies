const movies = require('./data');

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const arrayOfDirectors = array.map((element) => element.director);
  console.log(arrayOfDirectors);
  return arrayOfDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let numberOfMovies = moviesArray.length;
  console.log(numberOfMovies);
}
const newArr = movies.filter(
  (element) =>
    element.director === 'Steven Spielberg' && element.genre.includes('Drama')
);
console.log(newArr);
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  const scoreSum = movies.reduce(function (sum, currentMovie) {
    return sum + currentMovie.score;
  }, 0);
  const scoreAv = scoreSum / movies.length;
  const roundToTwo = Number(scoreAv.toFixed(2));
  console.log(roundToTwo);
}
scoresAverage(movies);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovies = array.filter((element) =>
    element.genre.includes('Drama')
  );
  const scoreDramaSum = dramaMovies.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0);
  const scoreDramaAv = scoreDramaSum / dramaMovies.length;
  const roundToTwo = +scoreDramaAv.toFixed(2);
  console.log(roundToTwo);
}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const order = array.sort(function (a, b) {
    // if (a.year === b.year)
    // {array.sort(function(a, b) {
    //   return a.title && b.title})};
    return a.year - b.year;
  });
  console.log(order);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  const alphabeticalOrder = arr.sort(function(a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  });
  console.log(alphabeticalOrder);
  return arr.slice(19);
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
