import Link from 'next/link';
import projects from '../../data/projects.json';
import type { Project } from '../../types/content';
import { withBase } from '../../lib/basePath';
import styles from './page.module.css';

const list = ([...projects] as Project[]).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export default function ProjetosPage() {
	return (
		<section className={styles.page}>
			<h1>Projetos</h1>
			<p>Todos os projetos com acesso para páginas de detalhe.</p>
			<div className={styles.grid}>
				{list.map((project) => (
					<article key={project.slug} className={styles.card}>
						{project.cover?.image ? <img src={project.cover.image} alt={project.title} className={styles.image} /> : null}
						<h2>{project.title}</h2>
						<p>{project.summary}</p>
						<Link href={withBase(`projetos/${project.slug}`)}>Abrir detalhes</Link>
					</article>
				))}
			</div>
		</section>
	);
}
