import React from 'react';
import styles from './css/style.module.css';

export default function NoteText({text}) {
  return (
    <input className={styles.noteText} type='text' value={`${text ? text : ''}`} />
  )
}
