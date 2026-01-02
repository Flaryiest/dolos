import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Verity
        </Link>
        <div className={styles.links}>
          <Link to="/portfolio" className={styles.link}>Portfolio</Link>
          <Link to="/careers" className={styles.link}>Careers</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
