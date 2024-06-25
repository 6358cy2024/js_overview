//Target the form, which is an id
const noteForm = document.querySelector('#note-form'); 
//Target the note header h3, which is a class
const noteHeader = document.querySelector('.note-header');
function getNotes() {
    const rawNotes = localStorage.getItem('notes');
}

//Need a function that is called when the form is submitted
function createNote(eventObj) {
    eventObj.preventDefault();
        //Grab the node input element
    const noteInput = document.querySelector('#note-input');
        
        //Get the value(what they typed into the box)\

    const noteText = noteInput.value;
    //create a date value object
    const dateObj = new Date();
    //get the month from the date object
    const month = dateObj.getMonth() + 1;
    //get the date from the date object
    const date = dateObj.getDate();
    //get the year from the date object
    const year = dateObj.getFullYear();
    const dateStr = `${month}/${date}/${year}`;
    //The object should have two properties - text(noteText) and date(dateStr)

    const noteObj = {
        text: noteText,
        date: dateStr
    };


    //pull the old data from database(localStorage) or an empty array if no previous data has been stored

    const notes = JSON.parse(localStorage.getItem('notes')) || [];//converts JSON to JS will print [] if first value is null.
//push the noteObj to the notes array
    notes.push(noteObj);
    const jsonArray = JSON.stringify(notes);

    localStorage.setItem('notes', jsonArray);//not ('notes', notes)
}

function outputNotes() {
    //retrieve the raw notes array from localStorage
    const rawNotes = localStorage.getItem('notes');
    console.log(rawNotes);

    //Convert the array to JS

    //loop over each object in the array and output an article element into our
}

outputNotes();

//Set up event listeners, wait for page to load

noteForm.addEventListener('submit', createNote);//already implemented
// localStorage.setItem('data', JSON.stringify({name: 'Christian', age: 22}));
const rawData = localStorage.getItem('data');
const data = JSON.parse(rawData);
console.log(data.name);

// const fruits = ['orange', ' apple' , ' grape'];

//localStorage.setItem('fruits', fruits);
// function test(one, num, str){
//     //callback();
//     console.log(one);
// }

// test(function() {
//     console.log('callback called')//happens because it was called in the last line
// }, 10, 'some strong');
localStorage.setItem('name', 'Christian');
//This is a callback, when a function is passed as an argument.

function callback(eventObj){
    console.log('callback called');
}
const el = {
    age: 22,
    name: 'Christian',
    addEventListener: function(eventType, callbackFunction) {//no browser involved.
        console.log('addEventListener called');
        setTimeout(callbackFunction, 3000); // every 1000 is a second. calls he function callback();
    }

}



//el.addEventListener();//calls the function in el, this works because its defined by a function
el.addEventListener('click', callback);//goes to 56

// function setTimeout(cb, delayTime) {
//     cb();
// }

// setTimeout(function() {}, 10000)

