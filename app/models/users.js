const mongoose = require('mongoose');

const userSchema = require('./schema/users');

const UserModel = mongoose.model('User', userSchema);

class User {
	constructor(userDocument) {
		this.user = new UserModel(userDocument);
		return this.user;
	}

	async save() {
		await this.user.save();
	}

	static async findByUserID(userID) {
		return UserModel.find({
			userID
		});
	}

	static async updateUserByUserID(userID, updateDocument) {
		await UserModel.findOneAndUpdate({
			userID
		}, updateDocument);
		return UserModel.find({
			userID
		});
	}
}

module.exports = User;
