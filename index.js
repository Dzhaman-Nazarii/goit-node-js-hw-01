const contacts = require("./contacts.js");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.table(listContacts);
    case "get":
      const getContact = await contacts.getContactById(id);
      return console.table(getContact);
    case "add":
      const newBook = await contacts.addContact({ name, email, phone });
      return console.table(newBook);
    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.table(removeContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// contacts
//   .listContacts()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// contacts
//   .getContactById("rsKkOQUi80UsgVPCcLZZW")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// contacts
//   .removeContact("rsKkOQUi80UsgVPCcLZZW")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// contacts
//   .addContact("Nazarii", "2@gmail.com", "1123")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
