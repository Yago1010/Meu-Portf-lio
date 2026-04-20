'use client';

import Link from 'next/link';
import { useState } from 'react';
import site from '../../data/site.json';
import type { SiteData } from '../../types/content';
import { withBase } from '../../lib/basePath';
import styles from './Header.module.css';

const data = site as SiteData;

const nav = [
	{ href: withBase(''), label: 'Home' },
	{ href: withBase('archive'), label: 'Archive' },
	{ href: withBase('projetos'), label: 'Portfólio' },
	{ href: withBase('especialidades/frontend'), label: 'Frontend', mobileOnly: true },
	{ href: withBase('especialidades/mobile'), label: 'Mobile', mobileOnly: true },
	{ href: withBase('sobre'), label: 'Sobre' },
	{ href: withBase('contato'), label: 'Contato' },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className={styles.headerShell}>
			<div className={styles.headerContainer}>
				<Link href={withBase('')} className={styles.brand} onClick={() => setOpen(false)}>
					<span>{data.profile.name}</span>
					<small>{data.profile.headline}</small>
				</Link>
				<button
					className={styles.mobileTrigger}
					type="button"
					aria-expanded={open}
					aria-controls="main-menu"
					onClick={() => setOpen((current) => !current)}
				>
					<span className="sr-only">Abrir menu</span>
					<span />
					<span />
					<span />
				</button>
				<nav aria-label="Principal" id="main-menu" className={open ? styles.open : ''}>
					<ul className={styles.navList}>
						{nav.map(({ href, label, mobileOnly }) => (
							<li key={href} className={mobileOnly ? styles.mobileOnlyItem : ''}>
								<Link href={href} onClick={() => setOpen(false)}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
