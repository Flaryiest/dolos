import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a project in mind? Let's build something great together.
        </p>
      </header>

      <form className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" className={styles.input} placeholder="Jane Doe" />
        </div>
        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} placeholder="jane@example.com" />
        </div>
        <div className={styles.group}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" className={styles.textarea} placeholder="Tell us about your project..."></textarea>
        </div>
        <button type="submit" className={styles.submit}>Send Message</button>
      </form>
    </div>
  );
}
