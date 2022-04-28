import styles from "../styles/sidebar.module.css"
import {AiOutlineHome, AiTwotoneCalendar} from "react-icons/ai"


export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebar__menu}>
          <li className={styles.menu__item}>
          <span className={styles.icon}>
            <AiOutlineHome /> 
          </span>
              Home
            </li>
          <li className={styles.menu__item}>
          <span className={styles.icon}>
            <AiTwotoneCalendar /> 
          </span>
              Leave dates
            </li>
      </ul>
    </div>
  )
}
