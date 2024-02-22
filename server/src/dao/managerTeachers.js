import Database from '../config/mongodb.js';
import {
    createDocument,
    getOneDocument,
    getAllDocuments,
    updateDocument,
    deleteDocument
} from '../config/factory.js';

import TeacherModel from '../models/teachersModel.js';

class Teacher {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
        this.getAllDocuments = getAllDocuments;
        this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createTeacher(data) {
        const { name, last_name, birth_date, subject_id, class_grade_id, is_active } = data;
        const teacher = TeacherModel({
            name,
            last_name,
            birth_date,
            subject_id,
            class_grade_id,
            is_active
        });
        await this.createDocument('teachersCollection', teacher);
    }

    async getTeacher(query) {
        try {

            const teachers = await this.getAllDocuments('teachersCollection', query);
            return teachers;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el profesor: ${error.message}`);
        }
    }

    async updateTeacher(filter, dataUpdate) {
        try {

            const teachers = await this.updateDocument('teachersCollection', filter, dataUpdate);
            return teachers;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al actualizar el profesor: ${error.message}`);
        }

    }

    async deleteTeacher(query) {
        try {
            const teachers = await this.deleteDocument('teachersCollection', query);
            return teachers;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar el profesor: ${error.message}`);
        }
    }
}

export default Teacher;