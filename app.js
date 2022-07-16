// variables
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')


btn.addEventListener('click', async function() {
    let quotes = []
    const response = await fetch(`https://type.fit/api/quotes`)
    const listOfQuotes = await response.json()
    listOfQuotes.forEach(quote => quotes.push({quote: quote.text, author: quote.author}))

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].author
})