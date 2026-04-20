/**
 * Compat helper para links internos.
 * @param path sem barra inicial, ex. "projetos", "projetos/app-mobile"
 */
export function withBase(path: string): string {
	const clean = path.replace(/^\/+/, '');
	return `/${clean}`;
}
