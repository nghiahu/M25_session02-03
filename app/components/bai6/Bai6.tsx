import React from 'react'
import styles from "./bai6.module.scss"
export default function Bai6() {
  return (
    <>
        <h2>Bài 6</h2>
        <nav className={styles.navbar}>
      <div className={styles.logo}>logoipsum</div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Updates</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className={styles.profileIcon}>
        <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="Profile" />
      </div>
    </nav>
    </>
  )
}
