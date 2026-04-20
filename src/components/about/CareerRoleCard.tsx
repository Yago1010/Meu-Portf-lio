import styles from './CareerRoleCard.module.css';

type CareerRole = {
	period: string;
	role: string;
	focus: string;
	responsibilities: string[];
};

type Props = {
	item: CareerRole;
};

export default function CareerRoleCard({ item }: Props) {
	return (
		<article className={`${styles.careerCard} card-hover-lift`}>
			<p className={styles.period}>{item.period}</p>
			<h3>{item.role}</h3>
			<p className={styles.focus}>{item.focus}</p>
			<ul>
				{item.responsibilities.map((responsibility) => (
					<li key={responsibility}>{responsibility}</li>
				))}
			</ul>
		</article>
	);
}
