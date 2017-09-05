"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reHyphen = /[-_]+([a-z])/g;
var cache = Object.create(null);
function camelize(str, useCache) {
    return useCache && cache[str] ||
        ((useCache ? cache : {})[str] = str.replace(reHyphen, function (match, chr) { return chr.toUpperCase(); }));
}
exports.camelize = camelize;
