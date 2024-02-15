import Database from './mongodb.js';
const db = new Database();

async function createDocument(collection, data) {
	try {
		if (!db[collection]) {
			await db.connectToDatabase();
		}
		return db[collection].insertOne(data);
	} catch (error) {
		throw error;
	}
}

// Funcion para buscar todo
async function getAllDocuments(collection, query = {}, select) {
	try {
		if (!db[collection]) {
			await db.connectToDatabase();
		}
		// busca una coleccion mediante una query, si la query es un objeto vacio pinta todo.
		const document = await db[collection].find(query).project(select).toArray();
		const total = await document.length;
		return { document, total };
	} catch (error) {
		throw error;
	}
}

// Funcion para buscar por parametro
async function getOneDocument(collection, query) {
	try {
		if (!db[collection]) {
			await db.connectToDatabase();
		}
		const document = await db[collection].findOne(query);
		return document;
	} catch (error) {
		throw error;
	}
}

async function updateDocument(collection, filter, dataUpdate) {
	try {
		if (!db[collection]) {
			await db.connectToDatabase();
		}
		const document = await db[collection].updateOne(filter, {
			$set: dataUpdate,
		});
		return document;
	} catch (error) {
		throw error;
	}
}

async function deleteDocument(collection, filter) {
	try {
		if (!db[collection]) {
			await db.connectToDatabase();
		}
		const result = await db[collection].deleteOne(filter);
		return result;
	} catch (error) {
		throw error;
	}
}

export { createDocument, getAllDocuments, getOneDocument, updateDocument, deleteDocument };
