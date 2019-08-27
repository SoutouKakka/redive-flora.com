function whoami(ctx) {
	const body = {
		service: 'redive-flora.com'
	};
	ctx.body = body;
}

const common = {
	whoami
};

module.exports = common;
