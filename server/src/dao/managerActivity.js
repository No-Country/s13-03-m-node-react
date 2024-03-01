import { createDocument, getAllDocuments, getOneDocument, updateDocument } from "../config/factory.js";
import Database from "../config/mongodb.js";
import ActivityModel from "../models/activityModel.js";

class ActivityManager{
    constructor(){
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
    }

    async createActivity(data){
        const { title, description, requirements, creationDate, activityDate, needAuthorization, grade} = data;
        const activity = ActivityModel({
            title, description, requirements, creationDate, activityDate, needAuthorization, grade
        })
        const newActivity = await this.createDocument('activityCollection', activity)
        return newActivity
    }

    async getAllActivities(){
        try {
            const activity = await this.getAllDocuments('activityCollection');
            return activity
        } catch (error) {
            console.log(error)            
            throw new Error(`Error al obtener las notificaciones: ${error.message}` )
        }
    }

    async getOneActivity(query){
        try {
			const activity = await this.getOneDocument('activityCollection', query);
			return activity;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la notification: ${error.message}`);
		}
    }

    async updateActivity(filter, dataUpadte){
        try {
           const activity = await  this.updateDocument("activityCollection", filter , dataUpadte ); 
           return activity
        } catch (error) {
            console.log(error)            
            throw new Error(`Error al obtener las notificaciones: ${error.message}` )
        }
    }
}

export default ActivityManager;