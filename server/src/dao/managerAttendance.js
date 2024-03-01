import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
    deleteDocument
} from '../config/factory.js';

import AttendanceModel from '../models/attendanceModel.js';

class AttendanceManager {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
        this.getAllDocuments = getAllDocuments;
        this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createAttendance(data) {
        const { studentid, date, isJustified, status,certificado } = data;
        const attendance = AttendanceModel({
            studentid,
            date,
            isJustified,
            status,
            certificado,
        });
        const newAttendance = await this.createDocument('attendancesCollection', attendance);
        return newAttendance
    }

    async getAttendance(query) {
        const attendance = await this.getAllDocuments('attendancesCollection', query);
        return attendance;
    }

    async getAllAttendances() {
        const attendances = await this.getAllDocuments('attendancesCollection');
        return attendances;
    }

    async updateAttendance(filter, dataUpdate) {
        const attendance = await this.updateDocument('attendancesCollection', filter, dataUpdate);
        return attendance;
    }

    async deleteAttendance(query) {
        const attendance = await this.deleteDocument('attendancesCollection', query);
        return attendance;
    }

}

export default AttendanceManager;



