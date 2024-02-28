import 'dotenv/config';
import { MongoClient } from 'mongodb';


const DB = process.env.MONGO_DB_NAME;
const URI = process.env.MONGO_DB_URI;

class Database {
	constructor() {
		this.uri = URI;
		this. DB = DB;
		this.client = new MongoClient(this.uri);
		this.db = null;
	}

	async connectToDatabase() {
		try {
			await this.client.connect();
			this.usersCollection = this.client.db(DB).collection('user');
			this.teachersCollection = this.client.db(DB).collection('teacher');
			this.imageCollection = this.client.db(DB).collection('image');
			this.notificationCollection = this.client.db(DB).collection('notification')
			this.subjectsCollection = this.client.db(DB).collection('subject');
			this.studentsCollection = this.client.db(DB).collection('student');
			this.attendancesCollection = this.client.db(DB).collection('attendance');
			this.evaluationsCollection = this.client.db(DB).collection('evaluation');
			console.log('Conectado a la base de datos');
		} catch (error) {
			console.error(error);
		}
	}

	async disconnect() {
		await this.client.close();
		console.log('Desconectado de la base de datos');
	}
}

export default Database;
