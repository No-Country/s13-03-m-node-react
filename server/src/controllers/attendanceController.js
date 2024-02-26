import mongoose from 'mongoose';
import AttendanceManager from "../dao/managerAttendance.js";
import AttendanceModel from "../models/attendanceModel.js";
import { ObjectId } from 'mongodb';

const attendanceManager = new AttendanceManager();

const createAttendance = async (req, res) => {
    const { date, isJustified, status } = req.body;
    let { studentid } = req.body;

    // trasformo en objetId studenId

    try {
        if (studentid) {
            if (!mongoose.Types.ObjectId.isValid(studentid)) {
                return res.status(400).json({
                    data: {},
                    status: 1,
                    message: 'El ID del estudiante no es válido',
                });
            }
            studentid = new ObjectId(studentid);
        }

        const newAttendance = {
            studentid,
            date,
            isJustified,
            status,
        }

        const vallitareError = AttendanceModel(newAttendance).validateSync();
        if (vallitareError) {
            return res.status(400).json({
                data: {},
                status: 1,
                message: 'Error de validación: ' + vallitareError.message,
            });
        } else {
            await attendanceManager.createAttendance(newAttendance);
        }
        return res.status(200).json({
            data: newAttendance,
            status: 0,
            message: 'Asistencia creada correctamente',
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

const getAttendances = async (req, res) => {
    const queryParams = req.query;
    let query = {};

    if (queryParams._id) {
        query._id = new ObjectId(queryParams._id);
    } else if (queryParams.studentid) {
        query.studentid = new ObjectId(queryParams.studentid);
    }

    try {
        const attendances = await attendanceManager.getAttendance(query || {});
        if (!attendances || attendances.length === 0) {
            return res.status(404).json({
                data: [],
                status: 1,
                message: 'No hay asistencias para mostrar.',
            });
        }

        return res.status(200).json({
            data: attendances,
            status: 0,
            message: 'Se han encontrado las siguientes asistencias',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: [],
            status: 1,
            message: 'Error interno del servidor: ' + error.message,
        });
    }
};

async function updateAttendance(req, res) {
    try {
        const filter = req.params;
        let dataUpdate = req.body;

        // Verificar y transformar studentId si es necesario
        if (dataUpdate.studentid) {
            if (!ObjectId.isValid(dataUpdate.studentid)) {
                return res.status(400).json({
                    data: {},
                    status: 1,
                    message: 'El ID del estudiante no es válido',
                });
            }
            dataUpdate.studentid = new ObjectId(dataUpdate.studentid); 
        }

        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) }; 
        } else {
            query = filter;
        }
        console.log(dataUpdate)
        const updatedTeacher = await attendanceManager.updateAttendance(query, dataUpdate);
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


async function deleteAttendance(req, res) {
    try {
        const filter = req.params;
        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        const deletedAttendance = await attendanceManager.deleteAttendance(query);
        return res.status(200).json({
            data: deletedAttendance,
            status: 0,
            message: 'Asistencia eliminada correctamente',
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


export {
    createAttendance,
    getAttendances,
    updateAttendance,
    deleteAttendance
}
