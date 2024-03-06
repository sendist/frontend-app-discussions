module.exports = {
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
		allowedHosts: [
			"all",
			"local.edly.io",
			"apps.local.edly.io",
			"studio.local.edly.io"
		],
	},
};
