import styles from "../styles/Navbar.module.css"
import {IoIosLogOut} from "react-icons/io"
import {BiUser} from "react-icons/bi"
import {MdOutlineAvTimer} from "react-icons/md"

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__menu}>
        <li className={styles.menu__item_push_right}>
          <h3>MY COMPANY</h3>
        </li>
        <li className={styles.menu__item}>
        <span className={styles.icon}><MdOutlineAvTimer /></span>
          Leave Balance
          </li>
        <li className={styles.menu__item}>
        <span className={styles.icon}><BiUser /></span>
          Username
          </li>
        <li className={styles.menu__item}>
        <span className={styles.icon}><IoIosLogOut /></span>
          Sign Out
          </li>
      </ul>
    </div>
  )
}


