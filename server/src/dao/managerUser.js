import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
} from '../config/factory.js';

import UserModel from '../models/userModel.js';

class UserManager {
	constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
	}

	async createUser(data) {
		//const { lastname, email, password , idstudents} = data;
		// const user = UserModel({
		// 	//names,
		// 	//country,
		// 	lastname,
		// 	// birthDate,
		// 	email,
		// 	password,
		// 	//picture,
		// 	//role,
		// 	$push: {students: idstudents}
		// });
		const newUser = await this.createDocument('usersCollection', data);
		return newUser
	}

	async getOneUser(query) {
		try {
			const user = await this.getOneDocument('usersCollection', query);
			return user;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el usuario: ${error.message}`);
		}
	}

	async getAllUser() {
		try {
			const users = await this.getAllDocuments('usersCollection');
			return users;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el usuario: ${error.message}`);
		}
	}

	async updateUser(filter, dataUpdate) {
		try {
			const users = await this.updateDocument('usersCollection', filter, dataUpdate);
			return users;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar usuario: ${error.message}`);
		}
	}
}

export default UserManager;
