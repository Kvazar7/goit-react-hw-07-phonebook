import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { filteredContacts } from 'redux/selector'

import ContactListItem from '../ContactList/contactlistitem';
import css from '../ContactList/contactlist.module.css'

const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  // const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()));

  const contacts = useSelector(filteredContacts);

  return (
    <>
      {contacts.length === 0 ? (
        <h3 className={css.contactlist_ul}>There is no contact</h3>
      ) :
        <ul className={css.contactlist_ul}>
          {contacts.map(contact => {
            return (
              <ContactListItem
                key={contact.id}
                name={contact.name}
                number={contact.phone}
                id={contact.id}
              />
            );
          })}
        </ul>
      } 
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
};