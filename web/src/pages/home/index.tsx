import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.isometricShape} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Introducing Verity</span>
          <h1 className={styles.title}>
            Building the <span className={styles.gradientText}>Future</span><br />
            of MicroSaaS
          </h1>
          <p className={styles.subtitle}>
            We craft elegant, high-performance software solutions that solve complex problems with beautiful simplicity.
          </p>
          <div className={styles.buttonGroup}>
            <Link to="/portfolio" className={styles.primaryButton}>
              View Our Work
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3>12+</h3>
            <p>Products Launched</p>
          </div>
          <div className={styles.statItem}>
            <h3>50k+</h3>
            <p>Active Users</p>
          </div>
          <div className={styles.statItem}>
            <h3>$2M+</h3>
            <p>Revenue Generated</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Verity?</h2>
          <p className={styles.sectionSubtitle}>
            We don't just build software; we build sustainable businesses powered by exceptional code and design.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Lightning Fast</h3>
            <p className={styles.featureText}>
              Optimized for performance from the ground up. Our applications load instantly and run smoothly on any device.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎨</div>
            <h3 className={styles.featureTitle}>Pixel Perfect</h3>
            <p className={styles.featureText}>
              Obsessive attention to detail in every pixel. We believe beauty and function should never be separated.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛡️</div>
            <h3 className={styles.featureTitle}>Secure by Design</h3>
            <p className={styles.featureText}>
              Enterprise-grade security built into every layer. Your data and your users' privacy are our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to build something amazing?</h2>
          <p className={styles.ctaText}>
            Join us on our journey to redefine what's possible with microSaaS.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
