function movieTemplate (movie) {
  // Create a new table row for each Movie in movies array in data.js
  return `
    <tr>
      <td>${movie.title}</td>
      <td>${movie.year}</td>
      <td>${movie.score}</td>
      <td>${movie.starring}</td>
    </tr>
  `
}

module.exports = movieTemplate
