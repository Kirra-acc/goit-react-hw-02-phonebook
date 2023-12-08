import React from 'react';
import s from './ListItem.module.css';

export const ListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.contactItem}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        className={s.deleteBtn}
        type="button"
        onClick={event => deleteContact(id, event)}
      >
        Delete
      </button>
    </li>
  );
};
