import { styles } from "./styles.js";
import { Name } from "./name-symbol.js"

const span = (value, style) => ["span", {style}, value];

const format = (x) => {
	if (x === null || x === undefined) return span(String(x), styles.nullable);
	if (typeof x === "boolean") return span(x, styles.boolean);
	if (typeof x === "number") return span(x, styles.number);
	if (typeof x === "string") return span(`"${x}"`, styles.string);
	if (typeof x === "function") return span(x.name || x.toString(), styles.fn);
	return x ? ['object', {object: x}] : null
};

const formatBody = (o) => {
	return [
		'ol', { style: styles.list },
		'{',
		...Object.keys(o).map(prop => (['li', { style: styles.listItem }, span(prop, styles.property), ': ', format(o[prop])])),
		['li', {style: styles.listItem}, span("[Prototype]", styles.proto), ': ', format(Object.getPrototypeOf(o))],
		'}'
	];
}

export const NamedObjectFormatter = {
	header(o) {
		if (o && o[Name]) return span(o[Name], styles.name)
	},
	hasBody(o) { return o instanceof Object },
	body(o) { return formatBody(o) }
};