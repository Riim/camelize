let reHyphen = /[-_]+([a-z])/g;

let cache = Object.create(null);

export function camelize(str: string, useCache?: boolean): string {
	return useCache && cache[str] ||
		((useCache ? cache : {})[str] = str.replace(reHyphen, (match, chr) => chr.toUpperCase()));
}
