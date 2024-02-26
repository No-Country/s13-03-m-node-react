import NotificationManager from "../dao/managerNotification";
import NotificationModel from "../models/notificationModel";
import { Types } from 'mongoose';

const { ObjectId } = Types;
const notificationmanager = new NotificationManager();

const createNotificatioin = async(req, res) =>{
    try {
		const data = req.body;
		const validateError = NotificationModel(data).validateSync();
		if (validateError) {
			return res.status(400).json({
				data: {},
				status: 1,
				message: 'Error de validación: ' + validateError.message,
			});
		}
		const newNotification = await notificationmanager.createUser(data);
		return res.status(200).json({
			data: newNotification,
			status: 0,
			message: 'Usuario creado correctamente',
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
		const notification = await notificationmanager.getOneNotification({_id: new ObjectId(id)});
		if (!notification) {
			throw new Error('la notification no existe');
		}
		return res.status(200).json({
			data: notification,
			status: 0,
			message: 'Usuario encontrado exitosamente.',
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
			throw new Error('No hay usuarios para mostrar.');
		}
		return res.status(200).json({
			data: notificationes,
			status: 0,
			message: 'Se han encontrado los siguientes usuarios',
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

export {createNotificatioin, getNotificationById, getNotifications, updateNotification };