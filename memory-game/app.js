"use strict"
const cardArray = [
    {
        name : 'fries',
        img : 'image/fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'image/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'image/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'image/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'Image/milkshake.png'
    },
    {
        name : 'pizza',
        img  : 'image/pizza.png'
    },
    {
        name : 'fries',
        img : 'image/fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'image/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'image/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'image/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'image/milkshake.png'
    },
    {
        name : 'pizza',
        img  : 'image/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon =[];

function creatBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'image/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
creatBoard()

function checkMatch () {
    const cards = document.querySelector('img')
    const optionOneId = cardsChosenIds[0];
    const optionTWoId = cardsChosenIds[1];
    console.log(cards)
    if (optionOneId == optionTWoId) {
        alert('you have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You Found a Match..!");
        cards[optionOneId].setAttribute('src', 'image/white.png');
        cards[optionTWoId].setAttribute('src', 'image/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTWoId].removeEventListener('click', flipCard);
        
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'image/blank.png');
        cards[optionTwoId].setAttribute('src', 'image/blank.png');
        alert('sorry try again !')
    }
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congragulation you found them all!'
    }
}


function flipCard () {
    const cardId = this.getAttribute('data-id'); 
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src',cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}

































