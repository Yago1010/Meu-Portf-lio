// @ts-check
import { defineConfig } from 'astro/config';

/** @param {string} raw */
function normalizeBase(raw) {
	if (!raw || raw === '/') return undefined;
	const withLeading = raw.startsWith('/') ? raw : `/${raw}`;
	return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

const base = normalizeBase(process.env.BASE_PATH ?? '/');

// https://astro.build/config
export default defineConfig({
	...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
	...(base ? { base } : {}),
});
