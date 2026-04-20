import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import site from '../data/site.json';

const data = site as { meta: { title: string; description: string; locale: string } };

export const metadata: Metadata = {
	title: data.meta.title,
	description: data.meta.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang={data.meta.locale}>
			<body>
				<Header />
				<main id="conteudo">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
