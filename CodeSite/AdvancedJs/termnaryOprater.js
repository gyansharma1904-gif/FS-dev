// const exerciseTimeMins = 40
const correctAnswer = 7
const playerGuess = 7

const message = (playerGuess < correctAnswer) ? "too low": (playerGuess > correctAnswer) ? "too high": "exect answer"


// const message = exerciseTimeMins < 30 ? "You need to try harder": exerciseTimeMins < 60? "good!": "excellent"

console.log(message);