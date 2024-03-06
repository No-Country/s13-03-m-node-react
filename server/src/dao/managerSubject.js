import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
    deleteDocument,
} from '../config/factory.js';

class SubjectManager{
    constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createSubject(data){
        const subject = await this.createDocument('subjectCollection', data);
        return subject
    }

    async getOneSubject(query){
        try {
			const subject = await this.getOneDocument('subjectCollection', query);
			return subject;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la materia: ${error.message}`);
		}
    }

    async getAllSubjects(){
        try {
			const subjects = await this.getAllDocuments('subjectsCollection');
			return subjects;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener las materias: ${error.message}`);
		}
    }

    async updateSubject(filter, dataUpdate) {
		try {
			const subject = await this.updateDocument('subjectsCollection', filter, dataUpdate);
			return subject;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar la materia: ${error.message}`);
		}

    }

    async deleteSubject(query) {
		try {
			const subject = await this.deleteDocument('subjectsCollection', query);
			return subject;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al eliminar la materia: ${error.message}`);
		}
	}

}

export default SubjectManager;