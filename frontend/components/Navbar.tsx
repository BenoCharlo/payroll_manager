import styles from "../styles/Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__menu}>
        <li className={styles.menu__item}>Leave Balance</li>
        <li className={styles.menu__item}>Username</li>
        <li className={styles.menu__item}>Sign Out</li>
      </ul>
    </div>
  )
}


