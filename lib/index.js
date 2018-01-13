'use strict';

function config(options) {
	const ignoreCase = ('ignoreCase' in options) ? options.ignoreCase : true;
	return function (str, query) {
		if (query.length === 0) {
			return 0;
		}
		if (ignoreCase) {
			str = str.toLowerCase();
			query = query.toLowerCase();
		}
		let last = -1;
		let score = 0;
		let found = 0;
		for (let q = 0; q < query.length; q++) {
			const next = str.indexOf(query[q], last + 1);
			if (next < 0) {
				return 0;
			}
			if (next - last > 1) {
				score += Math.pow(found, 2);
				found = 1;
			} else {
				found++;
			}
			last = next;
		}
		score += Math.pow(found, 2);
		return Math.sqrt(score) / query.length;
	};
}

module.exports = config({});
module.exports.config = config;
