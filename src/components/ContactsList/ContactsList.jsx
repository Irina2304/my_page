import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectvisibleItems } from 'redux/selectors';

export const ContactsList = () => {
  const visibleItems = useSelector(selectvisibleItems);

  return (
    <ul>
      {visibleItems.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
