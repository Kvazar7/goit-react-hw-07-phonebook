import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'services/services';
import css from '../ContactList/contactlistitem.module.css'

const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(deleteContact(id))
  return (
    <li className={css.contactlistitem}>
      {name}: {phone} <button type="button" onClick={onClick} className={css.contactlistitem_button}>Delete</button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}