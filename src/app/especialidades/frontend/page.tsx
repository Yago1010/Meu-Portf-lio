import PageIntro from '../../../components/ui/PageIntro';
import FrontendProjectCard from '../../../components/specialties/FrontendProjectCard';
import projects from '../../../data/projects.json';
import type { Project } from '../../../types/content';
import styles from './page.module.css';

const frontendProjects = (projects as Project[]).filter((project) => project.category !== 'Mobile').slice(0, 12);
const capabilities = [
	'Design systems escaláveis e padronização de UI',
	'Arquitetura frontend com foco em performance e DX',
	'Integração com APIs complexas e observabilidade',
	'Acessibilidade, SEO técnico e métricas Core Web Vitals',
];

export default function FrontendPage() {
	return (
		<>
			<PageIntro
				eyebrow="Especialidade"
				title="Frontend"
				description="Interfaces profissionais orientadas a produto, performance, conversão e experiência do usuário."
			/>

			<section className={styles.section}>
				<div className={styles.capabilityPanel}>
					<h2>Diferenciais de entrega</h2>
					<div className={styles.capabilityList}>
						{capabilities.map((item) => (
							<p key={item}>{item}</p>
						))}
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<div className={styles.frontendArchive}>
					<h2>Projetos frontend</h2>
					<div className={styles.frontendGrid}>
						{frontendProjects.map((project) => (
							<FrontendProjectCard key={project.slug} project={project} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
