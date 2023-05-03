import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'services/services';
import css from '../ContactForm/contactform.module.css'

const ContactForm = () => {
  
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.items);
  let name = useSelector(state => state.contacts.name);
  let number = useSelector(state => state.contacts.number);
  
  const handleChange = e => {
    switch (name) {
      case 'name': {
        name = e.target.value;
        break;
      }
      case 'number': {
        number = e.target.value;
        break;
      }
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isMatch = contacts.find(
      contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase()
    );
    if (isMatch) {
      Notiflix.Notify.warning(`${name} is already in contacts list!`);
      return;
    }

    const form = e.target;
    dispatch(addContact({ name: form.elements.name.value, phone: form.elements.number.value }));
    form.reset();
  };

  return (
      <form onSubmit={handleSubmit} autoComplete="off" className={css.phonebook_form}>
        <label htmlFor="" className={css.phonebook_form__label}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            className={css.phonebook_form__input}
          />
        </label>
        <label htmlFor="" className={css.phonebook_form__label}>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            className={css.phonebook_form__input}
          />
        </label>
        <button type="submit" className={css.phonebook_form__button}>Add contact</button>
      </form>
    );
  
}

export default ContactForm;