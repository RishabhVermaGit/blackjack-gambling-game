let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.querySelector("#sum")
let cardsEl = document.querySelector("#cards")

let player = {
    name: "Money",
    chips: 200,
}

let playerEl = document.getElementById("player")
playerEl.textContent = player['name'] + ": " + player['chips'] + " Rs"

function addMoney()
{
    player.chips +=200
    playerEl.textContent = player['name'] + ": " + player['chips'] + " Rs"
}

function startGame()
{
    if(player.chips<20)
    {
        messageEl.innerText = "You ran out of money"
    }
    if(isAlive===false && player.chips>=20)
    {
        isAlive = true
        hasBlackJack = false
        sum = 0
        let firstCard = getRandomCard()
        sum+=firstCard
        let secondCard = getRandomCard()
        sum+=secondCard
        cards = [firstCard, secondCard]
        renderGame();
    }
}

function renderGame()
{
    if(sum<21)
    {
        message = "Do you want to draw a new card?";
    }

    else if(sum === 21)
    {
        message = "You've got blackjack!";
        hasBlackJack = true;
        isAlive = false;
        player.chips*=2
        playerEl.textContent = player['name'] + ": " + player['chips'] + " Rs"
    }

    else
    {
        message = "You're out of the game!";
        isAlive  = false;
        player.chips-=(20/100*player.chips)
        playerEl.textContent = player['name'] + ": " + player['chips'] + " Rs"
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum; 
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
}

function getRandomCard()
{
    let number =  Math.floor(Math.random()*13 + 1)
    if(number === 1 && sum>=11)
        return 1
    else if(number === 1)
        return 11
    else if(number > 10)
        return 10
    else return number
}

function newCard()
{
    if(isAlive===true && hasBlackJack===false)
    {
        let card = getRandomCard()
        cards.push(card)
        sum += card;
        renderGame();
    }    
}