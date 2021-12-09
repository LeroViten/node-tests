const updateContacts = require('./updateContacts');
const getAllContacts = require('./getAllContacts');

const updateContactById = async ({ id, name, email, phone }) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await updateContacts(contacts);
  return contacts[index];
};

module.exports = updateContactById;
