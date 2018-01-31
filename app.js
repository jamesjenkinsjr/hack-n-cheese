//Generator button and first/last strings
const button = document.querySelector('#generate');
const firstString = document.querySelector('#first');
const lastString = document.querySelector('#last');

//Create onclick event
button.addEventListener('click', generate);

//Generate the response
function generate (e) {
    //Fill #first and #last h2 elements with random strings
    console.log(firstString, lastString);

}