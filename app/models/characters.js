const mongoose = require('mongoose');

const characterSchema = require('./schema/characters');

const CharacterModel = mongoose.model('Character', characterSchema);

class Character {
	static async create(characterDocument) {
		this.character = new CharacterModel(characterDocument);
		await this.character.save();
		return this.character;
	}

	static async findByID(characterID) {
		return CharacterModel.find({
			characterID
		});
	}

	static async updateByID(characterID, updateDocument) {
		await CharacterModel.findOneAndUpdate({
			characterID
		}, updateDocument);
		return CharacterModel.find({
			characterID
		});
	}
}

module.exports = Character;
