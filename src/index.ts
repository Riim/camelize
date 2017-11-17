let reHyphen = /[-_]+([a-z])/g;

let cache = Object.create(null);

export function camelize(str: string, useCache?: boolean): string {
	let value: string;

	return (
		(useCache && cache[str]) ||
		((value = str.replace(reHyphen, (match, chr) => chr.toUpperCase())),
		useCache ? (cache[str] = value) : value)
	);
}
