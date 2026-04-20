import site from '../../data/site.json';
import type { SiteData } from '../../types/content';
import styles from './Footer.module.css';

const data = site as SiteData;

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footerShell}>
			<div className={styles.footerContainer}>
				<p>
					© {year} {data.profile.name}. Engenharia de software para performance, escala e confiabilidade.
				</p>
				<div className={styles.footerLinks}>
					{data.contact.linkedin && (
						<a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
					)}
					{data.contact.github && (
						<a href={data.contact.github} target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
					)}
					<a href={`mailto:${data.contact.email}`}>E-mail</a>
				</div>
			</div>
		</footer>
	);
}
