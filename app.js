//Generator button and first/last strings
const button = document.querySelector('#generate');
const firstString = document.querySelector('#first');
const lastString = document.querySelector('#last');
const firstStringArray = [
    'Neo',
    'Morpheus',
    'Trinity'
];
const lastStringArray = [
    'Gorgonzola',
    'Cheddar',
    'Havarti'
];
//Create onclick event
button.addEventListener('click', generate);

//Generate the response
function generate (e) {
    //Fill #first and #last h2 elements with random strings
    const randomFirstString = randomStringSelect(firstStringArray);
    const randomLastString = randomStringSelect(lastStringArray);
    firstString.textContent = randomFirstString;
    lastString.textContent = randomLastString;
}
function randomStringSelect (array) {
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}