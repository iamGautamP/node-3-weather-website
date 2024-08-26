// this is the client side javascript that is going to run in the browser

// console.log('Client side javascript file is loaded')
// we need to load this to the html files, for now load it to index.html using script tag

// here we are needed first to fetch the forecast data in the clinet side javascript here and once we fetch the data here the rest like creating and rendering the form
// to the root route is easy
// and to actually to make the http request from client side javascript we'll use the very popular FetchAPI, Fetch is not a part of javascript
//  it is a browser based API which can be used in all modern browsers but it is not accessible in node js

// fetch('http://puzzle.mead.io/puzzle').then((response) => { // THIS LINK IS NOT WORKING
//     response.json().then((data) => {
//         console.log(data)
//     })
// }) 

// making the above code better:

// fetch('http://puzzle.mead.io/puzzle')
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((error) => {
//         console.error('Error fetching the puzzle:', error);
//     });


// calling fetch in client side javascript will kick off an asynchronous IO operation, much like calling request in
// node js , meaning we donot have access to data right away, instead we provide a function and that function will run at some point in the future when the data is available
// with the request in the nodejs we use callback as the second argument but with the fetch API we use the then method on the return value as shown above and then  we take the data
// and do what we want

// ===================================================================================================

// fetching the weather data from the url that we established (/weather)

// fetch('http://localhost:3000/weather?address=Boston')
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((error) => {
//         console.error('Error :', error);
//     });

// we got in the developer tools console:
// Client side javascript file is loaded
// app.js:42 {location: 'Boston', forecast: 'Partly cloudy. It is currently 73 degrees farenheit out there. and feels like 77 degrees farenheit', address: 'Boston'}


// making the above code better:

// fetch('http://localhost:3000/weather?address=Boston')
//     .then((response) => {
//         response.json().then((data) => {
//             if(data.error) {
//                 console.log(data.error)
//             }else {
//                 console.log(data.location)
//                 console.log(data.forecast)
//             }
//         })
//     })

// this was the response in the developer tools:
//  Boston
// app.js:63 Partly cloudy. It is currently 73 degrees farenheit out there. and feels like 77 degrees farenheit

// here is the code for when someone puts an address and clicks search:


// it is very similar to what we were doing to select element in the css file, from this a javascript representation of that element comes up and we can manipulate this or do what we want
// code for fetching the weather and rendering it to the home page when someone submits the form: we need to add an event listener
// first argument is the event we are to listen and second is the callback function that runs every single time the event occurs
// we could see the testing in console of developer tools for only a fraction of a second because it is the default behavior of the forms to refresh
// the webpage

const weatherForm = document.querySelector('form') // the query selector matches the first element in the document, here the forst form
// address fetching from the form
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2') // querying by id starts with a #

// messageOne.textContent= '' // what ever we give here will be automatically set to the p tag in index.hbs message-1 id p tag

weatherForm.addEventListener('submit',(e) => { // e is the argument of the event callback
    e.preventDefault() // to stop automatic refresh of the browser
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location) // using the above fetch call now in the event callback
    .then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            }else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
