/* ======= Imports */

/* ======= Get DOM Elements */
const submitButton = document.getElementById('submitButton');
const retryButton = document.getElementById('retryButton');
const toggledElements = document.getElementsByTagName('section');
const cageAnswerText = document.getElementById('cageAnswerText');
const userQuestionInputBox = document.getElementById('userQuestionInputBox');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

/* ======= State */

/* ======= Events */
// triggers on user clicks submit button
submitButton.addEventListener('click', () => {
    const randNum = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randNum];
    cageAnswerText.textContent = randomAnswer;
    toggleState();
});

// triggers on user clicks retry button
retryButton.addEventListener('click', () => {
    toggleState();
});

/* ======= Display Functions */
function toggleState() {
    toggledElements[0].classList.toggle('show');
    toggledElements[0].classList.toggle('hide');
    toggledElements[1].classList.toggle('show');
    toggledElements[1].classList.toggle('hide');
}

// (don't forget to call any display functions you want to run on page load!)
