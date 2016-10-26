var app = require("../../app");

module.exports = function(id) {
	id = parseInt(id, 10);
	var m = app.mapModulesUid[id];
	document.title = "module " + m.id;
	$(".page").html(require("./module.jade")({
		stats: app.stats,
		id: id,
		module: m,
		issuer: app.mapModulesUid[m.issuerUid]
	}));
	return function() {
	}
};
