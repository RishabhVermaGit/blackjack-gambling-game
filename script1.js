let firstCard = 10
let secondCard = 7

let sum = firstCard + secondCard + 6

if(sum<21)
    console.log("Do you want to draw a new card? 🙂")

else if(sum === 21)
    console.log("Woohoo! You've got blackjack! 🥳")

else
    console.log("You're out of the game! 😭")

// Check if a personis old enough to enter a night club (21)
// Log a suitable message to console in both cases

let age = 22

if(age<21) console.log("You can not enter the club!")
else console.log("Welcome!")

//Check if a person is eligible for a birthday card from the king! (100)
age = 100
if(age<100) console.log("Not Eligible")
else if(age === 100) console.log("Here is your birthday card from the king")
else console.log("Not eligible, you have already gotten one")

console.log(4 === 3)
console.log(5>2)
console.log(12>12)
console.log(3<0)
console.log(3>=3)
console.log(11<=11)
console.log(3<=2)

//Arrays :- Ordered Lists Of Items
let featuredPosts = ["Check out my Netflix Clone", "Here's code of my Project", "I've relaunched my portfolio"]
let experience = ["CEO at Scrimba", "Frontend Developer at Xeneta", "People Counter for Norstat"]

console.log(featuredPosts[0])
console.log(experience[1])
console.log(experience[2])
console.log(experience[0])

console.log(featuredPosts.length)

let myProfile = ["Rishabh",20,true];
console.log(myProfile)

let cards = [7,4]
cards.push(6)
console.log(cards)

let messages = ["Hey, how's it going?","I'm great, thank you! How about you?","All good, Been working on my portfolio lately."]
let newMessage = "Same Here!"
messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)

for(let count = 1; count<11; count++)
{
    console.log(count)
}

for(let i = 10; i<=100; i+=10)
{
    console.log(i)
}

for(let i = 0; i<messages.length; i++)
{
    console.log(messages[i])
}

for(let i = 0; i<cards.length; i++)
{
    console.log(cards[i])
}

let player1Time = 102
let player2Time = 107

function getFastestRaceTime()
{
    if(player1Time<player2Time)
        return player1Time
    else return player2Time
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)


function totalRaceTime()
{
    return player1Time + player2Time
}
let totalTime = totalRaceTime()
console.log(totalTime)

let randomNumber = Math.random()  //generates a random number between 0 and 1 (excluding 1) i.e., 0.00 -> 0.999999______ similiarly Math.random()*6 -> 0.00 to 0.599999999.
console.log(randomNumber)

let flooredNumber = Math.floor(3.25632)
console.log(flooredNumber)

let number = Math.floor(Math.random()*6) //generates 0,1,2,3,4,5
console.log(number)

number = Math.floor(Math.random()*6 + 1) //generates 1,2,3,4,5,6
console.log(number)

function rollDice()
{
    return Math.floor(Math.random()*6+1)
}

let num = rollDice()
console.log(num)

let hasCompletedCourse = true
let givesCertificate = true

function generateCertificate()
{
    console.log("Generate Certificate....")
}

if(hasCompletedCourse===true && givesCertificate===true)
{
    generateCertificate()
}

let hasSolvedChallenge = false
let hasHintsLeft = false 

function showSolution(){
    console.log("Showing the solution...")
}

if(hasSolvedChallenge===false && hasHintsLeft===false)
    showSolution()

let likesDocumentaries = false
let likesStartups = true

function recommendMovie(){
    console.log("Hey!, check out this new film we think you will like!")
}

if(likesDocumentaries===true || likesStartups===true)
    return recommendMovie()

//Objects 

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Herald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
}
console.log(course['length'])