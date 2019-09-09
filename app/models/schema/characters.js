const mongoose = require('mongoose');

const characterSkillSchema = require('./character_skills');

const { Schema } = mongoose;

const characterSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Character name is required'],
		trim: true,
		unique: true,
		index: true
	},
	nickname: {
		type: [String],
		required: [true, 'Character nickname is required'],
		default: [],
		trim: true
	},
	image_url: {
		type: String,
		default: null
	},
	ub_name: {
		type: String,
		required: [true, 'UB name is required'],
		trim: true
	},
	ub_description: {
		type: String,
		required: [true, 'UB description is required'],
		trim: true
	},
	distance: {
		type: Number,
		required: [true, 'Character distance is required'],
		index: true
	},
	skills: {
		type: [characterSkillSchema]
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

characterSchema.pre('findOneAndUpdate', function (next) {
	this._update.updated = new Date();
	next();
});

characterSchema.pre('update', function (next) {
	this._update.updated = new Date();
	next();
});

module.exports = characterSchema;
