import Database from '../config/mongodb.js';
import {
	createDocument,
	getOneDocument,
	getAllDocuments,
	updateDocument,
    deleteDocument,
} from '../config/factory.js';

class ScheduleManager{
    constructor() {
		this.db = new Database();
		this.createDocument = createDocument;
		this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
        this.deleteDocument = deleteDocument;
    }

    async createSchedule(data){
        const schedule = await this.createDocument('scheduleCollection', data);
        return schedule
    }

    async getOneSchedule(query){
        try {
			const schedule = await this.getOneDocument('scheduleCollection', query);
			return schedule;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener el horario: ${error.message}`);
		}
    }

    async getAllSchedule(){
        try {
			const schedule = await this.getAllDocuments('scheduleCollection');
			return schedule;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener los horarios: ${error.message}`);
		}
    }

    async updateSchedule(filter, dataUpdate) {
		try {
			const schedule = await this.updateDocument('scheduleCollection', filter, dataUpdate);
			return schedule;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al actualizar el horario: ${error.message}`);
		}

    }

    async deleteSchedule(query) {
		try {
			const schedule = await this.deleteDocument('scheduleCollection', query);
			return schedule;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al eliminar el horario: ${error.message}`);
		}
	}

}

export default ScheduleManager;