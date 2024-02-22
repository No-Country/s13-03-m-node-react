import Teacher from "../dao/managerTeachers.js";
import TeacherModel from "../models/teachersModel.js";
import { ObjectId } from 'mongodb';

const teacher = new Teacher();

const createTeacher = async (req, res) => {
    try {
        const data = req.body
        const validateError = TeacherModel(data).validateSync();
        if (validateError) {
            return res.status(400).json({
                data: {},
                status: 1,
                message: 'Error de validación: ' + validateError.message,
            });
        }
        const newTeacher = await teacher.createTeacher(data);
        return res.status(200).json({
            data: newTeacher,
            status: 0,
            message: 'Profesor creado correctamente',
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
};

async function getTeachers(req, res) {
    try {
        const queryParams = req.query;
        let query = {};

        if (queryParams._id) {
            query._id = new ObjectId(queryParams._id);
        } else {
            query = { ...queryParams };
        }
        const teachers = await teacher.getTeacher(query);
        if (!teachers || teachers.length === 0) {
            throw new Error('No hay profesores para mostrar.');
        }
        return res.status(200).json({
            data: teachers,
            status: 0,
            message: 'Se han encontrado los siguientes profesores',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
}


async function updateTeacher(req, res) {
    try {
        const filter = req.params;
        const  dataUpdate  = req.body;
        console.log(dataUpdate);
        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        const updatedTeacher = await teacher.updateTeacher(query, dataUpdate);
        return res.status(200).json({
            data: updatedTeacher,
            status: 0,
            message: 'Profesor actualizado correctamente',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
}

async function deleteTeacher(req, res) {
    try {
        const filter = req.params;
        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        const deletedTeacher = await teacher.deleteTeacher(query);
        return res.status(200).json({
            data: deletedTeacher,
            status: 0,
            message: 'Profesor eliminado correctamente',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
}



export { createTeacher, getTeachers, updateTeacher, deleteTeacher };