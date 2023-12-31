import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from 'redux/contactsSlice';

import css from './Contact.module.css';

function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(item.id));

  return (
    <li className={css.item}>
      {`${item.name}: ${item.number}`}
      <Button
        size="small"
        type="submit"
        onClick={handleDeleteContact}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
}

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Contact;
