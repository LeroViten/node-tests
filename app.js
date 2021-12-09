const { program } = require('commander');
const contactsOperations = require('./src/js');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'addNewContact':
      const newContact = await contactsOperations.addNewContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case 'getAllContacts':
      const contacts = await contactsOperations.getAllContacts();
      console.table(contacts);
      break;

    case 'getContactById':
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;

    case 'updateContactById':
      const contactToUpdate = await contactsOperations.updateContactById({
        id,
        name,
        phone,
        email,
      });
      console.log(contactToUpdate);
      break;

    case 'removeContactById':
      const contactToRemove = await contactsOperations.removeContactById(id);
      console.log(contactToRemove);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// ! setting custom actions via COMMANDER to call as CLI commands:
program
  .option('-a, --action <type>', 'action type')
  .option('-i, --id <type>', 'contacts id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);
const options = program.opts();
invokeAction(options);

// testing app:
const idToGet = '1';
const idToUpdate = '2';
const idToRemove = '3';

// testing adding new contact:
const newContactData = {
  name: 'Masker',
  email: 'poopDestroyer@test.mail',
  phone: '+38(093)123-23-23',
};

// testing updating existing contact:
const contactDataToUpdate = {
  name: 'John Masker',
  email: 'poopDestroyer@gmail.mail',
  phone: '+38(093)123-23-23',
};

// invokeAction({ action: 'addNewContact', ...newContactData });
// invokeAction({ action: 'getAllContacts' });
// invokeAction({ action: 'getContactById', id: idToGet });
// invokeAction({ action: 'updateContactById', id: idToUpdate, ...contactDataToUpdate });
// invokeAction({ action: 'removeContactById', id: idToRemove });
