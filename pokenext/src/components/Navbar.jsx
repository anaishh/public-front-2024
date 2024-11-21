import Link from 'next/link'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles.menu}>
      <Link href='/history'>History</Link>
      <Link href='/pokemons'>Pokemons</Link>
    </div>
  )
}