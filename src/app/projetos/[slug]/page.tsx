import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '../../../data/projects.json';
import type { Project } from '../../../types/content';
import { withBase } from '../../../lib/basePath';
import styles from './page.module.css';

type PageProps = {
	params: Promise<{ slug: string }>;
};

const list = projects as Project[];

export function generateStaticParams() {
	return list.map((project) => ({ slug: project.slug }));
}

export default async function ProjetoDetailPage({ params }: PageProps) {
	const { slug } = await params;
	const project = list.find((item) => item.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<article className={styles.page}>
			<p>
				<Link href={withBase('projetos')}>← Projetos</Link>
			</p>
			<h1>{project.title}</h1>
			<p className={styles.meta}>
				{project.category} · {project.year}
			</p>
			<p className={styles.description}>{project.description}</p>
			{project.cover?.image ? <img src={project.cover.image} alt={project.title} className={styles.image} /> : null}
			<div className={styles.tags}>
				{project.tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</div>
		</article>
	);
}
