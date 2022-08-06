import { PropTypes } from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import s from './ContactFilter.module.css';

const ContactFilter = ({ onChange }) => {
  const filterId = nanoid();
  return (
    <>
      <label htmlFor={filterId} className={s.label}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        id={filterId}
        onChange={onChange}
        name="filter"
      />
    </>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
