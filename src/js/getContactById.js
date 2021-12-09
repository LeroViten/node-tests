const getAllContacts = require('./getAllContacts');

const getContactById = async (id) => {
  const contacts = await getAllContacts();
  const result = contacts.find((contact) => contact.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
