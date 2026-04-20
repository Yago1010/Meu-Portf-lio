import PageIntro from '../../../components/ui/PageIntro';
import MobileProjectCard from '../../../components/specialties/MobileProjectCard';
import projects from '../../../data/projects.json';
import type { Project } from '../../../types/content';
import styles from './page.module.css';

const mobileProjects = (projects as Project[]).filter((project) => project.category === 'Mobile').slice(0, 12);
const specialties = [
	{
		title: 'Desenvolvimento Android',
		description:
			'Desenvolvimento de aplicativos nativos e multiplataforma para Android usando Java, Kotlin e práticas modernas de UI/UX.',
	},
	{
		title: 'Desenvolvimento Flutter',
		description: 'Criação de aplicações multiplataforma escaláveis com arquitetura orientada a estado e integrações nativas.',
	},
	{
		title: 'Integração de API RESTful e GraphQL',
		description: 'Conexão de apps com APIs seguras, cache inteligente e sincronização em tempo real para máxima confiabilidade.',
	},
	{
		title: 'Firebase e serviços em nuvem',
		description: 'Autenticação, Firestore, banco em tempo real, notificações e monitoramento para apps móveis escaláveis.',
	},
	{
		title: 'Integração de gateway de pagamento',
		description: 'Pagamentos com Stripe, Apple Pay, Google Pay e compras in-app com validações adequadas e seguras.',
	},
	{
		title: 'Processamento e transmissão de vídeo',
		description: 'Soluções avançadas com FFmpeg, players customizados e Agora SDK para comunicação em tempo real.',
	},
];

export default function MobilePage() {
	return (
		<>
			<PageIntro
				eyebrow="Especialidade"
				title="Mobile"
				description="Página dedicada para projetos e capacidades mobile, com cards consistentes e imagens alinhadas."
			/>

			<section className={styles.section}>
				<div className={styles.panel}>
					<h2>Portfólio mobile</h2>
					<div className={styles.showcaseGrid}>
						{mobileProjects.map((project) => (
							<MobileProjectCard key={project.slug} project={project} />
						))}
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<div className={styles.panel}>
					<h2>Habilidades e conhecimentos técnicos</h2>
					<div className={styles.cardsGrid}>
						{specialties.map((item) => (
							<article className={styles.specialtyCard} key={item.title}>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
