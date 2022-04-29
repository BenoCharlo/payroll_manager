import {Navbar} from "./Navbar"
import { Sidebar } from "./Sidebar";
import styles from "../styles/layout.module.css"

interface LayoutProps {
    children: React.ReactNode;
 }
export default function Layout({children} : LayoutProps) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={styles.layout_display}>
        <div className={styles.display_username}>
          <h3 className={styles.welcome_text}>Bonjour Username</h3>
          <h5 className={styles.welcome_text}>Bienvenue sur votre portail</h5>
        </div>
        <div className={styles.subtitles}>
          Mes informations
        </div>

        <div className={styles.subtitles}>
          Mes soldes
        </div>

        <div className={styles.subtitles}>
          Mes demandes en cours
        </div>

        <div className={styles.infos}>
          <ul className={styles.infos__menu}>
            <li className={styles.menu__item}>Mes informations</li>
            <li className={styles.menu__item}>Mes soldes</li>
            <li className={styles.menu__item}>Mes demandes en cours</li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  )
}
