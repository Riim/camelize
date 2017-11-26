let reHyphen = /[-_]+([a-z])/g;

let cache = Object.create(null);

export function camelize(str: any, useCache?: boolean): string {
	str = String(str);

	let value: string;

	return (
		(useCache && cache[str]) ||
		((value = (str as string).replace(reHyphen, (match, chr) => chr.toUpperCase())),
		useCache ? (cache[str] = value) : value)
	);
}
