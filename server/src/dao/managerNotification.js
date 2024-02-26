import { createDocument, getAllDocuments, getOneDocument, updateDocument } from "../config/factory";
import Database from "../config/mongodb";
import NotificationModel from "../models/notificationModel";

class NotificationManager{
    constructor(){
        this.db = new Database();
        this.createDocument = createDocument;
        this.getOneDocument = getOneDocument;
		this.getAllDocuments = getAllDocuments;
		this.updateDocument = updateDocument;
    }

    async createNotification(data){
        const { tipo, titulo, contenido, fechaCreacion, leido} = data;
        const notification = NotificationModel({
            tipo, titulo, contenido, fechaCreacion, leid
        })
        const newNotification = await this.createDocument('notificationCollection', notification)
        return newNotification
    }

    async getOneNotification(query){
        try {
			const notification = await this.getOneDocument('notificationCollection', query);
			return notification;
		} catch (error) {
			console.error(error);
			throw new Error(`Error al obtener la notification: ${error.message}`);
		}
    }

    async getAllNotifiations(){
        try {
            const notification = await this.getAllDocuments('notificationCollection');
            return notification
        } catch (error) {
            console.log(error)            
            throw new Error(`Error al obtener las notificaciones: ${error.message}` )
        }
    }

    async updateNotification(filter, dataUpadte){
        try {
           const notification = await  this.updateDocument("notificationCollection", filter , dataUpadte ); 
           return notification
        } catch (error) {
            console.log(error)            
            throw new Error(`Error al obtener las notificaciones: ${error.message}` )
        }
    }
}

export default NotificationManager;