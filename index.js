const contacts = require("./contacts.js");

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

contacts
  .addContact("Nazarii", "2@gmail.com", "1123")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
