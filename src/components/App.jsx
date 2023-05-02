import ContactForm from '../components/ContactForm/contactform'
import ContactList from '../components/ContactList/contactlist'
import Filter from '../components/Filter/filter'
import css from '../components/app.module.css'

import { useDispatch } from 'react-redux';
import { getContacts } from 'services/services';
import { useEffect } from 'react';

export default function App() {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getContacts());
  }, [dispatch]);
  
  return (
      <div className={css.contact_book}>
        <h2 className={css.contact_book__head}>Phonebook</h2>
      <ContactForm />
        <h2 className={css.contact_book__head}>Contacts</h2>
      <Filter />
      <ContactList />
      </div>
  )
}

