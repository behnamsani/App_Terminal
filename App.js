const fs = require('fs');
const { json } = require('node:stream/consumers');

const users = [
    { id: "1", fullName: "behnam Sani" },
    { id: "2", fullName: "zeinab Zadmehr" },
    { id: "3", fullName: "Fateme Sani" },
];


// fs.writeFileSync("contacts.json", JSON.stringify(users));
// const data = fs.readFileSync("contacts.json");
// const dataString =data.toString()
// console.log(JSON.parse(dataString));

// console.log(process.argv);

// console.log(process.argv[2]);

// const command = process.argv[2];

// if(command=="add") console.log("Adding....");
// else console.log("command NOT Found....");

// switch(command){
//     case "add":
//         console.log("Adding..");
//         break;
//     case "remove":
//         console.log("Removing....");
//         break;
//     default:
//         console.log("command Not Valid....");
// }
//? ---------------------------------------------------------------------------

