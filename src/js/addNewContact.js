const { v4 } = require('uuid');
const updateContacts = require('./updateContacts');
const getAllContacts = require('./getAllContacts');

const addNewContact = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await getAllContacts();
  contacts.push(newContact);

  await updateContacts(contacts);
  return newContact;
};

module.exports = addNewContact;
