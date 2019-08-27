const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSkillSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Character name is required'],
		trim: true,
		unique: true,
		index: true
	},
	physical: {
		type: Boolean,
		default: false
	},
	magical: {
		type: Boolean,
		default: false
	},
	def_debuff: {
		type: Boolean,
		default: false
	},
	debuff_scale: {
		type: Number,
		default: 1
	},
	time_length: {
		type: Number,
		default: 0
	},
	debuff_timeline: {
		type: [Number],
		default: []
	},
	single_targer: {
		type: Boolean,
		default: false
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

characterSkillSchema.pre('findOneAndUpdate', function (next) {
	this._update.updated = new Date();
	next();
});

characterSkillSchema.pre('update', function (next) {
	this._update.updated = new Date();
	next();
});

module.exports = characterSkillSchema;
