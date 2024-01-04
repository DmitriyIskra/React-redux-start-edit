import React from 'react';
import styles from './css/style.module.css';

export default function InputWrapper({children}) {
  return (
    <form className={styles.wrapper}>
        {children}
    </form>
  )
}
