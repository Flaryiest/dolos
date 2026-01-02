import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/navbar';
import styles from './layout.module.css';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} Verity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
