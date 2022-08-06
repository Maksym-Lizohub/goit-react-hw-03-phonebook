import { PropTypes } from 'prop-types';
import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <ContactItem key={item.id} onDelete={onDelete} contact={item} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
