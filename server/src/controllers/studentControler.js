import Student from "../dao/managerStudents.js";
import StudentModel from "../models/studentsModel.js";
import {ObjectId} from 'mongodb';

const student = new Student();

const createStudent = async (req, res) => {
    try {
        const data = req.body;
        const validateError = StudentModel(data).validateSync();
        if (validateError) {
            return res.status(400).json({
                data: {},
                status: 1,
                message: 'Error de validación: ' + validateError.message,
            });
        }
        const newStudent = await student.createStudent(data);
        return res.status(200).json({
            data: newStudent,
            status: 0,
            message: 'Estudiante creado correctamente',
        });

    } catch (error) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
};

const getStudents = async (req, res) => {
    try {
        const queryParams = req.query;
        let query = {};

        if (queryParams._id) {
            query._id = new ObjectId(queryParams._id);
        } else {
            query = { ...queryParams };
        }
        const students = await student.getStudent(query);
        if (!students || students.length === 0) {
            throw new Error('No hay estudiantes para mostrar.');
        }
        return res.status(200).json({
            data: students,
            status: 0,
            message: 'Se han encontrado los siguientes estudiantes',
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

const deleteStudent = async (req, res) => {
    try {
        const filter = req.params;
        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        const deletedStudent = await student.deleteStudent(query);
        return res.status(200).json({
            data: deletedStudent,
            status: 0,
            message: 'Estudiante eliminado correctamente',
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

const updateStudent = async (req, res) => {
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
        const updatedStudent = await student.updateStudent(query, dataUpdate);
        return res.status(200).json({
            data: updatedStudent,
            status: 0,
            message: 'Estudiante actualizado correctamente',
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



export {
    createStudent,
    getStudents,
    deleteStudent,
    updateStudent
}


