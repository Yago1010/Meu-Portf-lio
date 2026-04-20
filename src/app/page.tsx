import Link from 'next/link';
import site from '../data/site.json';
import projects from '../data/projects.json';
import type { Project, SiteData } from '../types/content';
import { withBase } from '../lib/basePath';
import styles from './page.module.css';

const data = site as SiteData;
const list = projects as Project[];
const featured = [...list].filter((p) => p.featured).sort((a, b) => (a.order ?? 99) - (b.order ?? 99)).slice(0, 9);

export default function HomePage() {
	return (
		<>
			<section className={styles.hero}>
				<p className={styles.eyebrow}>{data.hero.eyebrow}</p>
				<h1>{data.hero.title}</h1>
				<p className={styles.lead}>{data.hero.subtitle}</p>
				<div className={styles.actions}>
					<Link className={styles.primary} href={withBase('projetos')}>
						{data.hero.primaryCta}
					</Link>
					<Link className={styles.ghost} href={withBase('contato')}>
						{data.hero.secondaryCta}
					</Link>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Projetos em destaque</h2>
				<div className={styles.grid}>
					{featured.map((project) => (
						<article key={project.slug} className={styles.card}>
							{project.cover?.image ? <img src={project.cover.image} alt={project.title} className={styles.image} /> : null}
							<h3>{project.title}</h3>
							<p>{project.summary}</p>
							<Link href={withBase(`projetos/${project.slug}`)}>Ver projeto</Link>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
