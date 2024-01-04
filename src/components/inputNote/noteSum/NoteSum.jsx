import React from 'react';
import styles from './css/style.module.css';

export default function NoteSum({sum}) {
  return (
    <input className={styles.noteSum} type='number' value={`${sum ? sum : ''}`} />
  )
}
