// Devani loves 
// listening to Ludovico Einaudi while coding
// devouring Yak Momos for brunch
// prefers Tennis over any other sport
// is amazing at dropping mad puns at inopportune times.



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {}

rl.question(`What's is your name?  `, (answer1) => {
  rl.question(`What's your favouirte show?  `, (answer2) => {
    rl.question(`What's your favourite game?  `, (answer3) => {
      rl.question(`What's your favourite sport to watch?  `, (answer4) => {
        rl.question(`What's your favourite food to eat?  `, (answer5) => {
          rl.question(`What city do you live in?  `, (answer6) => {
            rl.question(`What's your favourite music?  `, (answer7) => {
              rl.question(`What's your superpower?  `, (answer8) => {
                person.name = answer1
                person.show = answer2
                person.game = answer3
                person.sport = answer4
                person.food = answer5
                person.city = answer6
                person.music = answer7
                person.superpower = answer8
                console.log(`${person.name}'s from ${person.city} enjoys watching ${person.show} or ${person.sport},\n listening to ${person.music}, and playing ${person.game}, all\n while eating ${person.food}.\n ${person.name}'s superpower is: ${person.superpower}`)
              rl.close()
})})})})})})})})

