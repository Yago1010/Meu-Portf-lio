export type Project = {
	slug: string;
	title: string;
	category: 'Mobile' | 'Web' | 'Full Stack' | 'Consultoria' | 'E-commerce' | 'UI/UX';
	summary: string;
	description: string;
	tags: string[];
	year: string;
	role?: string;
	client?: string;
	highlights?: string[];
	outcome?: string;
	featured?: boolean;
	order?: number;
	cover?: {
		image?: string;
		background: string;
		logoText: string;
	};
	repoUrl?: string;
	demoUrl?: string;
	caseStudyUrl?: string;
};

export type SiteData = {
	meta: {
		title: string;
		description: string;
		locale: string;
	};
	profile: {
		name: string;
		headline: string;
		availability: string;
		roleLabel: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		highlights: string[];
		primaryCta: string;
		secondaryCta: string;
	};
	about: {
		title: string;
		intro: string;
		description: string;
		stats: Array<{ value: string; label: string }>;
	};
	experience: {
		title: string;
		items: Array<{
			period: string;
			periodLabel?: string;
			role: string;
			company: string;
			description: string;
			responsibilities?: string[];
			stack: string[];
		}>;
	};
	skills: {
		title: string;
		groups: Array<{
			title: string;
			items: string[];
		}>;
	};
	contact: {
		email: string;
		location: string;
		linkedinLabel: string;
		linkedin?: string;
		github?: string;
		instagram?: string;
		whatsapp?: string;
		resumeUrl?: string;
	};
};
