//when page loads, show a button that the user clicks
//When the button is clicked, show a prompt for first name, last name and age
//store the 3 values to an object
// print the data object into the browser

// console.log(window.document);
// const document = window.document;
const gatherBtn = document.querySelector('#gather-btn');
const h1 = document.querySelector('h1');
console.log(gatherBtn.innerText);
console.log(h1.style);

function gatherInfo() {
    let firstName, lastName, age;
    let ask = true;
    while(ask) {
        

        if (!firstName){
            firstName = prompt('Please enter your first name:');
            continue;

        }
        
        if (!lastName){
            lastName = prompt('Please enter your last name');//returns a string

            continue;
        }
        

        if (!age || isNaN(age)){
            age = +prompt('Please enter your age');
            continue;
        }
        ask = false;
    }
    // while(!firstName|| !lastName|| !age) {
    //     firstName = prompt('Please enter your first name:');
    //     lastName = prompt('Please enter your last name');
    //     age = prompt('Please enter your age');
    // }
    // if (!firstName|| !lastName|| !age) {
    //     alert('You must fill out all values');
    //     return gatherInfo();

    // }

}

gatherBtn.addEventListener('click', gatherInfo);
