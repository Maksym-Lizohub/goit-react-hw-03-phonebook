import { PropTypes } from 'prop-types';
import React from 'react';
import s from './ContactItem.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.item}>
      <span className={s.span}>
        {name}: {number}
      </span>
      <button className={s.button} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
