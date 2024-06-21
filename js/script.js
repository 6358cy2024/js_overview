const str = 'some string';
const num = 10;
const bol = true;
const arr = ['John', 'Bob', 'Steve'];

const data = {
    name: 'Christian',
    age: 22,
    info: {
        location: 'Atl',
        hobbies: [
            {   
                name: 'fishing',
                frequency: 1//hobbies[0];
            },

            {
                name: 'pickleball',
                frequency: 2
            },
            {
                name: 'Another',
                frequency: 3
            }
        ]
    }
};

// const filtered = data.info.hobbies.filter(funciton (obj) {
//     if (obj.frequency > 1){
//         return true;
//     }
// })
// console.log(data.info.hobbies[2].frequency);