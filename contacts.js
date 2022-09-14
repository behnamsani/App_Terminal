const fs = require('fs');

const chalk = require('chalk');

const addContact = (fullName, code, phone, email) => {
    const contacts = loadContacts();
    const duplicateContact = contacts.find((item) => item.code === code);
    if (!duplicateContact) {
        contacts.push({ fullName, code, phone, email });
        saveContact(contacts);
        console.log(chalk.green("contact saved :)"));
    } else {
        console.log(chalk.red("contact already exist !!! :("));
    }

}

const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync("contacts.json");
        const dataContact = JSON.parse(dataBuffer.toString());
        return dataContact;
    } catch (er) {
        // console.log(er);
        return [];
    }

}

const saveContact = (contact) => {
    fs.writeFileSync("contacts.json", JSON.stringify(contact));
}

const listContacts = () => {
    const contacts = loadContacts();
    if (contacts.length > 0) {
        console.log(`${chalk.yellow("list contacts : \n")}`);
        console.table(contacts);
        contacts.forEach(element => {
            console.log(`\t${chalk.gray('Full Name')} : ${chalk.blue(element.fullName)}`);
            console.log(`\t${chalk.gray('Code Meli')} : ${chalk.blue(element.code)}`);
            console.log(`\t${chalk.gray('Phone Number')} : ${chalk.blue(element.phone)}`);
            console.log(`\t${chalk.gray('Email Address')} : ${chalk.blue(element.email)}`);
            console.log(`\t${chalk.gray("--------------------------------------------------")}\n`);
        });
    } else {
        console.log(`${chalk.red('There is no contacts to show !')}`);
    }
}

function removeContacts (code){
    const contacts=loadContacts();
    const contactFiltered=contacts.filter(c=>c.code!==code);
    if(contactFiltered.length<contacts.length){
        saveContact(contactFiltered);
        console.log(`${chalk.white.italic(`\n\tcontact  with code meli :`)} ${chalk.yellow(code)} ${chalk.green('successfully removed :) \n')}`);
    }else{
        console.log(`${chalk.red.bold('CONTACTS NOT FOUND ! :(')}`);
    }
}

//!DRY => Don't Repeat yourSelf;


module.exports = {
    addContact,
    listContacts,
    removeContacts,
}
