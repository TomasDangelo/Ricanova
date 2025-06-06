import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
