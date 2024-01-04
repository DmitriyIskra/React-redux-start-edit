import React from 'react';
import styles from './css/css.module.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Outlet />
      </div>
    </div>
  )
}
