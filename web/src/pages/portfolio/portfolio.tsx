import styles from './portfolio.module.css';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      category: 'AI & Productivity',
      name: 'Project Alpha',
      description: 'A revolutionary tool for managing digital assets with AI-powered tagging and organization. Automatically sorts your chaotic file system.',
      link: '#',
      color: '#E0F2FE' // Light blue bg for placeholder
    },
    {
      id: 2,
      category: 'SaaS Platform',
      name: 'Beta Flow',
      description: 'Streamline your workflow with our intuitive project management solution designed for remote teams. Built for speed and collaboration.',
      link: '#',
      color: '#F0FDF4' // Light green bg for placeholder
    },
    {
      id: 3,
      category: 'Data Analytics',
      name: 'Gamma Analytics',
      description: 'Deep insights into your customer behavior without the complexity of traditional analytics tools. Privacy-first and cookie-free.',
      link: '#',
      color: '#FEF2F2' // Light red bg for placeholder
    },
    {
      id: 4,
      category: 'Developer Tools',
      name: 'Delta API',
      description: 'The fastest way to build and deploy serverless functions. Zero config, instant scale, and global distribution out of the box.',
      link: '#',
      color: '#FFF7ED' // Light orange bg for placeholder
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Our Portfolio</h1>
        <p className={styles.subtitle}>
          A collection of microSaaS products built to solve specific problems with precision and elegance.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer} style={{ backgroundColor: project.color }}>
              {/* Placeholder for actual image */}
            </div>
            <div className={styles.content}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h2 className={styles.projectName}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <a href={project.link} className={styles.projectLink}>
                View Project <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
