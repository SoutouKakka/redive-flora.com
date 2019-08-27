function debug(ctx) {
	const { params } = ctx;
	ctx.body = params;
}

const api = {
	debug
};

module.exports = api;
