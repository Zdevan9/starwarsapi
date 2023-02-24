const spaceShips = $('.spaceships').hide()
const characters = $('.characters').hide()
const mainButton = $('#button')
const backButton = $('#backButton').hide()
const tables = $('.tableDiv').hide()
const nextButton = $('#nextButton').hide()
const previousButton = $('#previousButton').hide()
const spaceShipsTable = $('.spaceshipTable').hide()
const previousSButton = $('#previousSButton').hide()
const nextSButton = $('#nextSButton').hide()
let currentPageCharacters = 1 
let currentPageStarships = 1

let button = $('#button').on('click', function (){
    let bodyPage = $('#body')
    bodyPage.css('background-image', 'none')
    bodyPage.css('background', 'url(https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-25_bc15ec98.jpeg) no-repeat center center fixed')
    spaceShips.show()
    characters.show()
    mainButton.hide()
})
//Code for the Characters table
async function charactersAPI1 (){
    const charactersURL = 'https://swapi.dev/api/people/?page=1'
    const fetchData = await fetch(charactersURL)
    const response = await fetchData.json()
    let peopleTable1 = ''
    const charactersTable1 = $('#charactersTable')
    charactersTable1.css({'color': 'yellow', 'border': '2px yellow'})
    charactersTable1.find('tr').not(':first').remove()
    response.results.map((characterPage1)=>{
        peopleTable1 += charactersTable1.append(`<tr><td>${characterPage1.name}</td>
        <td>${characterPage1.height}</td>
        <td>${characterPage1.mass}</td>
        <td>${characterPage1.gender}</td>
        <td>${characterPage1.birth_year}</td>
        <td>${characterPage1.skin_color}</td>
        </tr>`)
           
    })
    tables.show()
    characters.hide()
    spaceShips.hide()
    nextButton.show()    
}
characters.on('click', function(){
    charactersAPI1()
})

async function charactersAPI2 (){
    const charactersURL = 'https://swapi.dev/api/people/?page=2'
    const fetchData = await fetch(charactersURL)
    const response = await fetchData.json()
    let peopleTable2 = ''
    const charactersTable2 = $('#charactersTable')
    charactersTable2.find('tr').not(':first').remove()
    response.results.map((characterPage2)=>{
        peopleTable2 += charactersTable2.append(`<tr><td>${characterPage2.name}</td>
        <td>${characterPage2.height}</td>
        <td>${characterPage2.mass}</td>
        <td>${characterPage2.gender}</td>
        <td>${characterPage2.birth_year}</td>
        <td>${characterPage2.skin_color}</td>
        </tr>`)
       nextButton.hide()
       previousButton.show()
    })

}
nextButton.on('click', function(){
    currentPageCharacters++
    charactersAPI2()
    previousButton.show()
})
previousButton.on('click', function(){
    currentPageCharacters--
    if(currentPageCharacters === 1){
        charactersAPI1()
        previousButton.hide()
        nextButton.show()
    }
    
})

//Code for the Spaceships table
async function spaceshipsAPI1 (){
    const charactersURL = 'https://swapi.dev/api/starships/?page=1'
    const fetchData = await fetch(charactersURL)
    const response = await fetchData.json()
    let spaceshipsTable1 = ''
    const spaceshipTable1 = $('#spaceshipTable')
    spaceshipTable1.css({'color': 'yellow', 'border': '2px yellow'})
    spaceshipTable1.find('tr').not(':first').remove()
    response.results.map((spaceshipPage1)=>{
        spaceshipsTable1 += spaceshipTable1.append(`<tr><td>${spaceshipPage1.name}</td>
        <td>${spaceshipPage1.model}</td>
        <td>${spaceshipPage1.manufacturer}</td>
        <td>${spaceshipPage1.cost_in_credits}</td>
        <td>${spaceshipPage1.passengers}</td>
        <td>${spaceshipPage1.starship_class}</td>
        </tr>`)
    })
}

async function spaceshipsAPI2 (){
    const charactersURL = 'https://swapi.dev/api/starships/?page=2'
    const fetchData = await fetch(charactersURL)
    const response = await fetchData.json()
    let spaceshipsTable2 = ''
    const spaceshipTable2 = $('#spaceshipTable')
    spaceshipTable2.css({'color': 'yellow', 'border': '2px yellow'})
    spaceshipTable2.find('tr').not(':first').remove()
    response.results.map((spaceshipPage2)=>{
        spaceshipsTable2 += spaceshipTable2.append(`<tr><td>${spaceshipPage2.name}</td>
        <td>${spaceshipPage2.model}</td>
        <td>${spaceshipPage2.manufacturer}</td>
        <td>${spaceshipPage2.cost_in_credits}</td>
        <td>${spaceshipPage2.passengers}</td>
        <td>${spaceshipPage2.starship_class}</td>
        </tr>`)
    })
    
}

spaceShips.on('click', function(){
    spaceShips.hide()
    characters.hide()
    spaceshipsAPI1()
    nextSButton.show()
    spaceShipsTable.show()
})

nextSButton.on('click', function (){
    currentPageStarships++
    spaceshipsAPI2()
    previousSButton.show()
    nextSButton.hide()
    
})
previousSButton.on('click', function(){
    currentPageStarships--
    if(currentPageStarships === 1){
        spaceshipsAPI1()
        previousSButton.hide()
        nextSButton.show()
    }
})



