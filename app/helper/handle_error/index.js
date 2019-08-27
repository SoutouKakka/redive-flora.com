const ERROR_KEYS = {
	INTERNAL: {
		status: 500,
		metaCode: 5000,
		message: 'Internal Error.'
	}
};

class CustomError extends Error {
	constructor(key) {
		super(key.toString());
		this.ERROR_KEY = key;
		this.details = [];
	}
}

module.exports = { ERROR_KEYS, CustomError };
