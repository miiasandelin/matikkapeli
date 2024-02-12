let rand_num1 = 0
let rand_num2 = 0
let correct = 0
let incorrect = 0
let winRate = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

const incrementScore = (result) => {
    if (result == true) {
        correct++
        document.querySelector('#correct').innerHTML = correct
    } else {
        incorrect++
        document.querySelector('#incorrect').innerHTML = incorrect
    }

    calculateWinRate(correct, incorrect)
}

const calculateWinRate = (correct, incorrect) => {
    winRate = ((correct / (correct + incorrect)) * 100)
    winRate = Math.round(winRate * 100)
    winRate /= 100
    document.querySelector('#winrate').innerHTML = winRate
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

document.querySelector('button').addEventListener('click',() => {
    handleSubmit()
})

function submitForm(event){
    event.preventDefault();
    handleSubmit()
 }

document.querySelector('#formId').addEventListener('submit', submitForm);

const handleSubmit = () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        incrementScore(true)
        alert('Correct!')
    } else {
        incrementScore(false)
        alert('Incorrect!')
    }

    randomizeNumbers()
    document.querySelector('input').value=''
}