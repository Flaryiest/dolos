import styles from './careers.module.css';

export default function CareersPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Join Verity</h1>
        <p className={styles.subtitle}>
          We're a small team of makers building the next generation of software tools.
        </p>
      </header>

      <section className={styles.valuesSection}>
        <div className={styles.valueCard}>
          <h3 className={styles.valueTitle}>Autonomy</h3>
          <p className={styles.valueText}>We trust you to make the right decisions and own your work.</p>
        </div>
        <div className={styles.valueCard}>
          <h3 className={styles.valueTitle}>Impact</h3>
          <p className={styles.valueText}>Work on products that solve real problems for thousands of users.</p>
        </div>
        <div className={styles.valueCard}>
          <h3 className={styles.valueTitle}>Balance</h3>
          <p className={styles.valueText}>We believe in sustainable work paces and healthy lives.</p>
        </div>
      </section>

      <div className={styles.jobsList}>
        <div className={styles.jobCard}>
          <div className={styles.jobInfo}>
            <h2 className={styles.jobTitle}>Full Stack Engineer</h2>
            <div className={styles.jobMeta}>
              <span>📍 Remote</span>
              <span>💼 Full-time</span>
              <span>💰 $120k - $160k</span>
            </div>
          </div>
          <a href="#" className={styles.applyButton}>Apply Now</a>
        </div>

        <div className={styles.jobCard}>
          <div className={styles.jobInfo}>
            <h2 className={styles.jobTitle}>Product Designer</h2>
            <div className={styles.jobMeta}>
              <span>📍 Remote</span>
              <span>💼 Contract</span>
              <span>💰 Competitive</span>
            </div>
          </div>
          <a href="#" className={styles.applyButton}>Apply Now</a>
        </div>

        <div className={styles.jobCard}>
          <div className={styles.jobInfo}>
            <h2 className={styles.jobTitle}>Growth Marketer</h2>
            <div className={styles.jobMeta}>
              <span>📍 Remote</span>
              <span>💼 Full-time</span>
              <span>💰 $90k - $130k</span>
            </div>
          </div>
          <a href="#" className={styles.applyButton}>Apply Now</a>
        </div>
      </div>
    </div>
  );
}
