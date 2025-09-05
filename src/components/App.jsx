import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className="main-div">
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <h1>Phonebook</h1>
      <AddForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
