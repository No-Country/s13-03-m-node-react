import NotificationManager from "../dao/managerNotification.js";
import NotificationModel from "../models/notificationModel.js";
import { Types } from 'mongoose';

const { ObjectId } = Types;
const notificationmanager = new NotificationManager();

const createNotification = async(req, res) =>{
    try {
		const data = req.body;
		console.log(data)
		const validateError = NotificationModel(data).validateSync();
		if (validateError) {
			return res.status(400).json({
				data: {},
				status: 1,
				message: 'Error de validación: ' + validateError.message,
			});
		}
		const newNotification = await notificationmanager.createNotification(data);
		const notificationCreated = await notificationmanager.getOneNotification({_id: new ObjectId(newNotification.insertedId)})

		return res.status(200).json({
			data: notificationCreated,
			status: 0,
			message: 'Notificacion creado correctamente',
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			status: 1,
			message: 'Error interno del servidor: ' + error.message,
		});
	}
}

async function getNotificationById(req, res) {
    const id = req.params.id
    console.log('id: ', id) 
	try {
		const notification = await notificationmanager
		.getOneNotification({_id: new ObjectId(id)});
		if (!notification) {
			throw new Error('La notification no existe');
		}
		return res.status(200).json({
			data: notification,
			status: 0,
			message: 'Notificacion encontrada exitosamente.',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

async function getNotifications(req, res) {
	try {
		const notificationes = await notificationmanager.getAllNotifiations();
		if (!notificationes) {
			throw new Error('No hay notificaciones para mostrar.');
		}
		return res.status(200).json({
			data: notificationes,
			status: 0,
			message: 'Se han encontrado las siguientes notificaciones',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

async function updateNotification(req, res) {
	
	try {
		const id = req.params.id
		const data = req.body;
		let query;
		if(id){
			if(ObjectId.isValid(id)){
				query = {_id: new ObjectId(id)}
				console.log('query: ' , query)
			}else {
				return res.status(400).json({ error: 'ID inválido' });
			}
		}else{
			query = id;
		}
		const notificationUpdated = await notificationmanager.updateNotification(query, data);
		console.log('notification updated', notificationUpdated)
		const notificationUpdatedTwo = await notificationmanager.getOneNotification(query)
		console.log('notificationUpdatedTwo', notificationUpdatedTwo)
		return res.status(200).json({
            data: notificationUpdatedTwo,
            status: 0,
            message: 'Imagen actualizada correctamente',
        });
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export {createNotification, getNotificationById, getNotifications, updateNotification };