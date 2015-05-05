var path = require('path'),
	nconf = require('nconf');

nconf.argv()
      .env()
      .file({ file: process.env.CONFIG_FILE || 'req-config.json' });

var relPath = nconf.get(process.env.MY_NODE_MODULES || "MY_NODE_MODULES");
var req = require;
if (relPath) {
	req = function(name) {
		return require(path.join(relPath, name));
	}
}

module.exports = req;