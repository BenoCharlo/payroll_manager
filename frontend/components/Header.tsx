import styles from './header.module.css'


interface HeaderProps {
    children: React.ReactNode;
 }

export default function Header({children}: HeaderProps) {
  return (
    <div className={styles.container}>My header</div>
  )
}
