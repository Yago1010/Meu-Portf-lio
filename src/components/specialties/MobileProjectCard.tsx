import Link from 'next/link';
import type { Project } from '../../types/content';
import { withBase } from '../../lib/basePath';
import styles from './MobileProjectCard.module.css';

type Props = {
	project: Project;
};

export default function MobileProjectCard({ project }: Props) {
	return (
		<Link className={`${styles.showcaseCard} card-hover-lift`} href={withBase(`projetos/${project.slug}`)}>
			<div className={styles.mediaWrap}>
				{project.cover?.image ? (
					<img src={project.cover.image} alt={project.title} className={styles.showcaseImage} loading="lazy" />
				) : (
					<div
						className={styles.showcaseMedia}
						style={{ background: project.cover?.background ?? 'linear-gradient(135deg, #1b2433, #090f1e)' }}
					/>
				)}
			</div>
			<h3>{project.title}</h3>
			<p>{project.category}</p>
		</Link>
	);
}
