const updateContacts = require('./updateContacts');
const getAllContacts = require('./getAllContacts');

const removeContactById = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  const contactToRemove = contacts.splice(index, 1);
  await updateContacts(contacts);
  return contactToRemove;
};

module.exports = removeContactById;
