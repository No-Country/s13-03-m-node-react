import mongoose from 'mongoose';
import AttendanceManager from "../dao/managerAttendance.js";
import AttendanceModel from "../models/attendanceModel.js";
import { ObjectId } from 'mongodb';
import cloudinary from '../config/upload.cjs';


const attendanceManager = new AttendanceManager();

const createAttendance = async (req, res) => {
    const { date, status } = req.body;
    let { studentid } = req.body;
    const image = req.files && req.files.image; // Verificar si existe req.files y req.files.image
    console.log('image: ', image)
    let newImage = {}; // Inicializar como un objeto vacío
    
    try {
        if (image) {
            console.log("Image to be saved");
            console.log('Image tempFilePath:', image.tempFilePath);
            let result_image = await cloudinary.uploader.upload(image.tempFilePath, {
                public_id: `${Date.now()}`,
                resource_type: "auto",
            });
            console.log('Result image cloudinary:', result_image);
            console.log('Saving image data on Atlas Cloud');
            newImage = {
                idCloudinary: result_image.public_id,
                url: result_image.secure_url,
                creationDate: new Date(),
            };
        }
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Error al cargar la imagen a Cloudinary: ' + error.message,
        });
    }

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
            isJustified: newImage.url ? true : false,
            status,
            certificado: image ? newImage : {
                idCloudinary: '',
                url: '',
                creationDate: '',
            } 
        };

        const validateError = AttendanceModel(newAttendance).validateSync();
        if (validateError) {
            return res.status(400).json({
                data: {},
                status: 1,
                message: 'Error de validación: ' + validateError.message,
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
            total_month: 20,
            total_year: 200,
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
    const filter = req.query;
    const image = req.files && req.files.image;
    console.log('image: ', image)
    try {
        if (!image || !image.tempFilePath) {
            return res.status(400).json({
                data: {},
                status: 1,
                message: 'No se ha proporcionado una imagen válida.',
            });
        }

        console.log("Image to be saved");
        console.log('Image tempFilePath:', image.tempFilePath);
        let result_image = await cloudinary.uploader.upload(image.tempFilePath, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
        });
        console.log('Result image cloudinary:', result_image);
        console.log('Saving image data on Atlas Cloud');
        const newImage = {
            certificado: {
                idCloudinary: result_image.public_id,
                url: result_image.secure_url,
                creationDate: new Date()
            }
        };

        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) }; 
        } else {
            query = filter;
        }

        const updatedAttendance = await attendanceManager.updateAttendance(query, newImage);
        return res.status(200).json({
            data: updatedAttendance,
            status: 0,
            message: 'Asistencia actualizada correctamente.',
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
