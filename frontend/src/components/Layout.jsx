import React, { Fragment } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
const Layout = ({children}) => {
  return (
    <Fragment className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.mainContainer}>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
