"use strict";

// Ajax api call and the response stored in endpoint variable
const endpoint = fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');

const cities = [];

// get the promise from endpoint variable and object pass it to the then method
// then callback function convert the promise to json format and pass it 
endpoint.then(response => response.json())
    // get the promise and access the raw data
    .then(data => cities.push(...data));



// accept the user input(city or state) and filter that input from the
// cities array of objects and returns a filtered array of objects 
function searchMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

// include comma to a numeric string 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// event listener function that listens to change and keyup event 
// when the targeted element fires the event this function gets executed 
function displayMatches() {

    // this keyword is referencing to element that fires the event
    const matchArray = searchMatches(this.value, cities);
    const html = matchArray.map(place => { 

        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span>${numberWithCommas(place.population)}</span>
            </li>
       `;
    }).join('');

    suggestions.innerHTML = html;
    
}

// select the DOM element node and store the object representation
// of that element in a variable
let searchInput = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');

// when element fires the event the listener function
// listens to that event and get executed 
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

