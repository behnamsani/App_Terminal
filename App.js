// const fs = require('fs');
// const { json } = require('node:stream/consumers');

// const users = [
//     { id: "1", fullName: "behnam Sani" },
//     { id: "2", fullName: "zeinab Zadmehr" },
//     { id: "3", fullName: "Fateme Sani" },
// ];


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

const yargs = require('yargs');

const chalk = require('chalk');

const { addContact, listContacts, removeContacts } = require('./contacts.js');

yargs.command({
    command: "create",
    aliases: ["c"],
    describe: `${chalk.green('[create a new contacts]')}`,
    builder: {
        fullName: {
            alias: "f",
            describe: "person full Name",
            demandOption: true,
            type: "string",
        },
        code: {
            alias: "m",
            describe: "person Meli Code",
            demandOption: true,
            type: "string",
        },
        phone: {
            alias: "p",
            describe: "person Phone Number",
            demandOption: true,
            type: "number",
        },
        email: {
            alias: "e",
            describe: "person Email Address",
            demandOption: true,
            type: "string",
        },
    },
    handler({ fullName, code, phone, email }) {
        // console.log(fullName, phone, email);
        addContact(fullName, code, phone, email);
    },
});
yargs.command({
    command: "list",
    aliases: ['l'],
    describe: `${chalk.green('[saved contacts list]')}`,
    handler() {
        listContacts();
    }
});
yargs.command({
    command: "remove",
    aliases: ['r'],
    describe: `${chalk.green('remove person by meli code')}`,
    builder: {
        code: {
            alias: 'm',
            describe: 'person Meli Code',
            demandOption: true,
            type: 'string',
        }
    },
    handler({ code }) {
        removeContacts(code);
    }
});

yargs.parse();

// console.log(yargs.argv);