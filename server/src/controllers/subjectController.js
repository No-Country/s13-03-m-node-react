import SubjectManager from "../dao/managerSubject.js";
import {ObjectId} from 'mongodb';
import ScheduleModel from "../models/scheduleModel.js";
import ScheduleManager from "../dao/managerSchedule.js";


const subjectmanager = new SubjectManager();
const schedulemanager = new ScheduleManager();

const createSubject = async(req, res) => {
    const {name }= req.body
    const {horario} = req.body
    console.log('horario: ', horario)
    //const newhorario = new ScheduleModel(horario); 
    let subject = {
        name: name,
        horario:[]
    }
    let schedule;
    try {
        if(horario){
            console.log('newhorario: ', horario)
            schedule = await schedulemanager.createSchedule(horario) 
            console.log(schedule)
            subject.horario.push(schedule.insertedId)
        }
        
        console.log('subject to create: ', subject)
        const newSubject = await subjectmanager.createSubject(subject);
        console.log('subject creado: ', newSubject);
        const subjectCreated = await subjectmanager
        .getOneSubject({_id: new ObjectId(newSubject.insertedId)})
        console.log('subjectCreated: ', subjectCreated)
        return res.status(200).json({
            data: {subjectCreated},
            status: 0,
            message: 'Materia creada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
}

const createSubjectWithSchedule = async(req, res) => {
    try {

        const {name, horario } = req.body

        const newSubject = await subjectmanager.createSubject(data);
        const subjectCreated = await subjectmanager.getOneSubject({_id: new ObjectId(newSubject.insertedId)})
        console.log('subjectCreated: ', subjectCreated)
        return res.status(200).json({
            data: {subjectCreated},
            status: 0,
            message: 'Materia creada correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
}

async function getOneSubject (req, res) {
	const id = req.params;
    // if(id){
    //     if(ObjectId.isValid(id)){
    //         query = {_id: new ObjectId(id)}
    //         console.log('query: ', query)
           
    //     }else {
    //         return res.status(400).json({ error: 'ID inválido' });
    //     }
    // }
	try {
		const subject = await subjectmanager.getOneSubject({_id: new ObjectId(id)});
        console.log('subject: ',subject)
		if (!subject) {
			throw new Error('La materia no existe');
		}
		return res.status(200).json({
			data: subject,
			status: 0,
			message: 'Materia encontrado exitosamente.',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

async function getAllSubjects(req, res) {
	try {
		const subjects = await subjectmanager.getAllSubjects();
		if (!subjects) {
			throw new Error('No hay materias para mostrar.');
		}
		return res.status(200).json({
			data: subjects,
			status: 0,
			message: 'Se han encontrado las siguientes materias',
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			status: 1,
			message: error.message,
		});
	}
}

//Solo actualiza un horario, para actualizar mas de uno, realizar 1 peticion
//por  horario a actualizar
async function updateSubject(req, res)  {
    try {
        const filter = req.params;
        const  {nameUpdate}  = req.body;
        const  {idHorario, horaInicio, horaFin, diaSemana}  = req.body;
        let data ={
            name: nameUpdate
        }
        let name = nameUpdate;
    
        let query;
        let queryH;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        if (idHorario) {
            queryH = { _id: new ObjectId(idHorario) };
        } else {
            queryH = idHorario;
        }
        //chequear si req.body viene con horario, y si es asi update ese horario
        if(idHorario){
            let horario = {horaInicio: horaInicio, horaFin: horaFin, diaSemana: diaSemana}
            await schedulemanager.updateSchedule(queryH, horario);
        }
        
        const updatedSubject = await subjectmanager.updateSubject({ _id: new ObjectId(filter)}, {name});
        console.log('updatedSubject: ', updatedSubject)
        const newUpdatedSubject = await subjectmanager.getOneSubject({ _id: new ObjectId(filter) })
        console.log('newUpdatedSubject: ', newUpdatedSubject)
        return res.status(200).json({
            data: newUpdatedSubject,
            status: 0,
            message: 'Materia actualizada correctamente',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
};

//realizar update horario de materia

export {createSubject, getOneSubject, getAllSubjects, updateSubject}