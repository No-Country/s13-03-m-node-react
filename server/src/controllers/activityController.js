import { Types } from 'mongoose';
import ActivityManager from "../dao/managerActivity.js";
import ActivityModel from '../models/activityModel.js';

const { ObjectId } = Types;
const activityManager = new ActivityManager();

const createActivity = async(req, res)=>{
    try {
		const data = req.body;
		console.log(data)
		const validateError = ActivityModel(data).validateSync();
		if (validateError) {
			return res.status(400).json({
				data: {},
				status: 1,
				message: 'Error de validación: ' + validateError.message,
			});
		}
		const newActivity = await activityManager.createActivity(data);
		const activitycreated = await activityManager.getOneActivity({_id: new ObjectId(newActivity.insertedId)})

		return res.status(200).json({
			data: activitycreated,
			status: 0,
			message: 'Actividad creado correctamente',
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			status: 1,
			message: 'Error interno del servidor: ' + error.message,
		});
	}
}

async function getActivityById(req, res) {
    const id = req.params.id
    console.log('id: ', id) 
	try {
		const activity = await activityManager
		.getOneActivity({_id: new ObjectId(id)});
		if (!activity) {
			throw new Error('la actividad no existe');
		}
		return res.status(200).json({
			data: activity,
			status: 0,
			message: 'actividad encontrada exitosamente.',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

async function getActivities(req, res) {
	try {
		const activities = await activityManager.getAllActivities();
		if (!activities) {
			throw new Error('No hay actividades para mostrar.');
		}
		return res.status(200).json({
			data: activities,
			status: 0,
			message: 'Se han encontrado los siguientes actividades',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}
async function updateActivity(req, res) {
	
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
		const activityUpdated = await activityManager.updateActivity(query, data);
		console.log('activity updated', activityUpdated)
		const activityUpdatedTwo = await activityManager.getOneActivity(query)
		console.log('activityUpdatedTwo', activityUpdatedTwo)
		return res.status(200).json({
            data: activityUpdatedTwo,
            status: 0,
            message: 'Actividad actualizada correctamente',
        });
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

export { createActivity, getActivityById, getActivities, updateActivity };