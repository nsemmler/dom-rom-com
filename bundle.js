(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const movies = [
  { title: 'Say Anything...', year: 1989, score: '98%', starring: 'John Cusack, Ione Skye, John Mahoney, Lili Taylor' },
  { title: 'Groundhog Day', year: 1993, score: '96%', starring: 'Bill Murray, Andie MacDowell, Chris Elliott, Stephen Tobolowsky' },
  { title: 'Obvious Child', year: 2014, score: '90%', starring: 'Jenny Slate, Gaby Hoffmann, David Cross, Jake Lacy' },
  { title: 'The Big Sick', year: 2017, score: '98%', starring: 'Kumail Nanjiani, Zoe Kazan, Holly Hunter, Ray Romano' },
  { title: 'Roman Holiday', year: 1953, score: '98%', starring: 'Audrey Hepburn, Gregory Peck, Eddie Albert, Tullio Carminati' },
  { title: 'City Lights', year: 1931, score: '98%', starring: 'Charles Chaplin, Virginia Cherrill, Harry Myers, Florence Lee' },
  { title: 'The Princess Bride', year: 1987, score: '97%', starring: 'Cary Elwes, Robin Wright, Mandy Patinkin, Chris Sarandon' },
]

module.exports = movies

},{}],2:[function(require,module,exports){
const movies = require('./data')
const movieTemplate = require('./templates')

movies.forEach(movie => {
  const tbody = document.querySelector('tbody')
  tbody.innerHTML += movieTemplate(movie)
})


/*
  PREVIOUSLY:

  // Select text of the <h1> element
  const heading = document.querySelector('h1').textContent
  console.log(heading)

  // Select all of the table rows
  const tableRows = document.querySelector('table').children[1].children
  console.log(tableRows)

  // Change the <h1> text to 'DOM Romantic Comedies'
  document.querySelector('h1').textContent = "DOM Romantic Comedies"

  // Log out all of the years for each movies
  const rowsArr = Array.from(document.getElementsByTagName('TBODY')[0].children)

  for (let i = 0; i < rowsArr.length; i++) {
    console.log(rowsArr[i].children[1].textContent)
  }

  // ^^ can be solved like so:
    const trElements = document.querySelectorAll('tr')
    const trs = Array.from(trElements)

    trs.forEach((element) => {
      console.log(element.children[1].textContent)
    })

  // Change the last <td> of each <tr> to include the count of how many actors are listed
  for (let i = 0; i < rowsArr.length; i++) {
    const starsStr = rowsArr[i].children[3].textContent
    rowsArr[i].children[3].textContent += ` (${starsStr.split(',').length})`
  }

  // ^^ can be solved like so:
    trs.forEach((element) => {
      const starringStr = element.children[3].textContent
      element.children[3].textContent += ` (${starringStr.split(',').length})`
    })

  // Remove the bg-dark class from the Jumbotron
  const element = document.getElementsByClassName('jumbotron')[0]
  element.classList.remove("bg-dark")

  // Add a new class bg-warning to the Jumbotron
  element.classList.add("bg-warning")

*/

},{"./data":1,"./templates":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
