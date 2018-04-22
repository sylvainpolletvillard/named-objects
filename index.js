import {NamedObjectFormatter} from "./formatter.js"

if (typeof window !== "undefined") {
	window.devtoolsFormatters = (window.devtoolsFormatters || []).concat(NamedObjectFormatter);
}

export {Name} from "./name-symbol.js"