export function withBase(path: string): string {
	const clean = path.replace(/^\/+/, '');
	return `/${clean}`;
}
