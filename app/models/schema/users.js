const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Username is required'],
		trim: true,
		unique: true
	},
	telegram_id: {
		type: String,
		required: [true, 'Telegram ID is required'],
		trim: true,
		unique: true,
		index: true
	},
	api_key: {
		type: String,
		required: [true, 'API key is required'],
		trim: true,
		unique: true,
		index: true
	},
	created: {
		type: Date,
		required: [true, 'Created date is required'],
		default: Date.now
	},
	updated: {
		type: Date,
		required: [true, 'Updated date is required'],
		default: Date.now
	}
});

userSchema.pre('findOneAndUpdate', function (next) {
	this._update.updated = new Date();
	next();
});

userSchema.pre('update', function (next) {
	this._update.updated = new Date();
	next();
});

module.exports = userSchema;
