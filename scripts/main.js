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
