import Database from '../config/mongodb.js';
import {
    createDocument,
    getOneDocument,
    getAllDocuments,
    updateDocument,
    deleteDocument
} from '../config/factory.js';

import StudentModel from '../models/studentsModel.js';

class Student {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
        this.getAllDocuments = getAllDocuments;
        this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createStudent(data) {
        try {
            const student = await this.createDocument('studentsCollection', data);
            return student;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al crear el estudiante: ${error.message}`);
        }
    }

    async getStudent(query) {
        try {
            const student = await this.getOneDocument('studentsCollection', query);
            return student;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el estudiante: ${error.message}`);
        }
    }

    async getAllStudents(query) {
        try {
            const students = await this.getAllDocuments('studentsCollection',query);
            return students;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el estudiante: ${error.message}`);
        }
    }

    async updateStudent(filter, dataUpdate) {
        try {
            const student = await this.updateDocument('studentsCollection', filter, dataUpdate);
            return student;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al actualizar el estudiante: ${error.message}`);
        }
    }



    async deleteStudent(query) {
        try {
            const student = await this.deleteDocument('studentsCollection', query);
            return student;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar el estudiante: ${error.message}`);
        }
    }


}

export default Student