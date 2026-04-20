import styles from './PageIntro.module.css';

type Props = {
	eyebrow: string;
	title: string;
	description: string;
};

export default function PageIntro({ eyebrow, title, description }: Props) {
	return (
		<header className={styles.pageIntro}>
			<p className={styles.eyebrow}>{eyebrow}</p>
			<h1>{title}</h1>
			<p className={styles.lead}>{description}</p>
		</header>
	);
}
