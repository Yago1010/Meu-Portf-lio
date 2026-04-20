import Link from 'next/link';
import type { Project } from '../../types/content';
import { withBase } from '../../lib/basePath';
import styles from './FrontendProjectCard.module.css';

type Props = {
	project: Project;
};

export default function FrontendProjectCard({ project }: Props) {
	return (
		<article className={`${styles.frontendCard} card-hover-lift`}>
			<div className={styles.headerRow}>
				<p>{project.year}</p>
				<span>{project.category}</span>
			</div>
			{project.cover?.image ? <img src={project.cover.image} alt={project.title} className={styles.projectImage} loading="lazy" /> : null}
			<h3>
				<Link href={withBase(`projetos/${project.slug}`)}>{project.title}</Link>
			</h3>
			<p className={styles.summary}>{project.summary}</p>
			<div className={styles.tags}>
				{project.tags.slice(0, 4).map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</div>
		</article>
	);
}
