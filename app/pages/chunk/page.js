var app = require("../../app");

module.exports = function(id) {
	id = parseInt(id, 10);
	document.title = "chunk " + id;
	$(".page").html(require("./chunk.jade")({
		stats: app.stats,
		id: id,
		chunk: app.mapChunks[id]
	}));
	return function() {
	}
};
