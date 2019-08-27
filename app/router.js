const Router = require('koa-router');

const common = require('./controllers/common');
const viewer = require('./controllers/viewer');
const api = require('./controllers/api');

const router = new Router();

// health check
router.get('/whoami', common.whoami);

// viewer
router
	.get('/viewer/cb/:year/:month', viewer.debug)
	.get('/viewer/cb/:year/:month/:boss', viewer.debug);

// api
router
	// common endpoints
	// characters
	.get('/api/characters/:characterName', api.debug)
	.post('/api/characters', api.debug)
	.patch('/api/characters/:characterName', api.debug)
	.delete('/api/characters/:characterName', api.debug)

	// clan battle endpoints
	.get('/api/cb/:year/:month', api.debug)
	.post('/api/cb/bosses', api.debug)
	.get('/api/cb/bosses/:year/:month/:boss/:cycle', api.debug)
	.patch('/api/cb/bosses/:year/:month/:boss/:cycle', api.debug)
	.delete('/api/cb/bosses/:year/:month/:boss/:cycle', api.debug);


module.exports = router;
