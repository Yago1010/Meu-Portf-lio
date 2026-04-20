'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import projects from '../../data/projects.json';
import type { Project } from '../../types/content';
import { withBase } from '../../lib/basePath';
import styles from './page.module.css';

const list = ([...projects] as Project[]).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
const filters = ['all', 'Mobile', 'Web', 'Frontend'];

export default function ArchivePage() {
	const [selected, setSelected] = useState('all');
	const rows = useMemo(
		() =>
			list.filter((project) => {
				const specialty = project.category === 'Mobile' ? 'Mobile' : 'Frontend';
				return selected === 'all' || project.category === selected || specialty === selected;
			}),
		[selected]
	);

	return (
		<section className={styles.archivePage}>
			<p className={styles.eyebrow}>Portfólio</p>
			<h1>Archive</h1>
			<p className={styles.archiveLead}>Lista completa de projetos no estilo archive, com navegação para detalhes dentro do site.</p>
			<div className={styles.archiveFilters}>
				{filters.map((filter) => (
					<button key={filter} type="button" data-active={selected === filter} onClick={() => setSelected(filter)}>
						{filter === 'all' ? 'Todos' : filter}
					</button>
				))}
			</div>
			<div className={styles.archiveTableWrap}>
				<table className={styles.archiveTable}>
					<thead>
						<tr>
							<th>Ano</th>
							<th>Projeto</th>
							<th>Especialidade</th>
							<th className={styles.hideMobile}>Stack</th>
							<th>Links</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((project) => (
							<tr key={project.slug}>
								<td>{project.year}</td>
								<td>
									<Link href={withBase(`projetos/${project.slug}`)}>{project.title}</Link>
								</td>
								<td>{project.category === 'Mobile' ? 'Mobile' : 'Frontend'}</td>
								<td className={styles.hideMobile}>
									<div className={styles.tagRow}>
										{project.tags.slice(0, 4).map((tag) => (
											<span key={tag}>{tag}</span>
										))}
									</div>
								</td>
								<td className={styles.linksCell}>
									<Link href={withBase(`projetos/${project.slug}`)}>Detalhes</Link>
									{project.repoUrl && (
										<a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
											GitHub
										</a>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
