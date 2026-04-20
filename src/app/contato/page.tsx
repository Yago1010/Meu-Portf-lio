import site from '../../data/site.json';
import type { SiteData } from '../../types/content';
import styles from './page.module.css';

const data = site as SiteData;
const c = data.contact;
const links: Array<{ label: string; href: string }> = [{ label: 'E-mail', href: `mailto:${c.email}` }];
if (c.linkedin) links.push({ label: 'LinkedIn', href: c.linkedin });
if (c.github) links.push({ label: 'GitHub', href: c.github });
if (c.whatsapp) links.push({ label: 'WhatsApp', href: c.whatsapp });

export default function ContatoPage() {
	return (
		<section className={styles.contactPage}>
			<h1>Contato</h1>
			<p>Disponível para consultoria técnica, liderança de times e evolução arquitetural de produtos digitais.</p>
			<ul>
				{links.map(({ label, href }) => (
					<li key={label}>
						<a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
							{label}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
