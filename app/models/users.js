const mongoose = require('mongoose');

const userSchema = require('./schema/users');

const UserModel = mongoose.model('User', userSchema);

class User {
	static async create(userDocument) {
		this.user = new UserModel(userDocument);
		await this.user.save();
		return this.user;
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
