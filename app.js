/* ======= Imports */

/* ======= Get DOM Elements */
const submitButton = document.getElementById('submitButton');
const retryButton = document.getElementById('retryButton');
const toggledElements = document.getElementsByTagName('section');
const cageAnswerText = document.getElementById('cageAnswerText');
const userQuestionInputBox = document.getElementById('userQuestionInputBox');

const answers = [
    "Killing me won't bring back your goddamn honey!",
    "I was always shocked when I went to the doctor's office and they did my X-ray and didn't find that I had eight more ribs than I should have or that my blood was the color green.",
    'Generally my instinct is to not do biographical movies. I want to build characters and not be locked into playing a part in history.',
    "Film has lost something in the translation to high tech. It's become so super-real. It's with digital this and stereo that, and everything's like a CD.",
    "Film acting is one of the only industries where you're criticized for working hard. In any other industry, it's considered a quality and something to behold.",
    'Every great story seems to begin with a snake.',
    "Children, to me, are of the utmost importance. They're really the future, aren't they?",
    'It’s a family that’s loaded with grudges and passion. We come from a long line of robbers and highwaymen in Italy, you know. Killers, even.',
    'I bought a Yamaha-1 and I was doing 180 miles per hour home on the 405 and that’s really, really crazy but I did it.',
    ' Snakes are sometimes perceived as evil, but they are also perceived as medicine. If you look at an ambulance, there’s the two snakes on the side of the ambulance. The caduceus, or the staff of Hermes, there’s the two snakes going up it, which means that the venom can also be healing.',
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
