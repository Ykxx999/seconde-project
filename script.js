// Global variable to store API data
let digimonList = [];

// Fetch Digimon data from API
async function fetchData() {
    const url = "https://digimon-api.vercel.app/api/digimon";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        digimonList = await response.json(); // Store fetched data
        console.log(digimonList);

    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    }
}

// get elements

let input = document.querySelectorAll('input')[0]
let btn = document.querySelectorAll('button')[0]
let displayName = document.querySelector('.display-name')
let digiCard = document.querySelector('.card-div')










// first feauter for get character info and display it inside a div as a card

btn.addEventListener('click', () => {

    let query = input.value.toLowerCase().trim(); // Convert input to lowercase & remove extra spaces
    let findCharacter = digimonList.find(digi => digi.name.toLowerCase() === query); // search for character inside the array

    if (findCharacter) {
        digiCard.innerHTML =
            `
            <h1>${findCharacter.name}</h1>
            <img src=${findCharacter.img}>
            <span>${findCharacter.level}</span>
            `
    } else {
        displayName.innerHTML = `${input.value} not found`
    }
    input.value = ''
})












// Start fetching data
fetchData();