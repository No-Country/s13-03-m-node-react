import mongoose from "mongoose";
import EvaluationManager from "../dao/managerEvaluation.js";
import EvaluationModel from "../models/evaluationModel.js";
import {ObjectId} from 'mongodb';

const evaluationManager = new EvaluationManager();

const createEvaluation = async (req, res) => {
    const { titulo, calificacion, fechaEvaluacion } = req.body;
    let {studentid} = req.body;

    try{
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
        const data = {
            titulo,
            calificacion,
            fechaEvaluacion,
            studentid
        }

        const vallitareError = EvaluationModel(data).validateSync();
        if (vallitareError) {
            return res.status(400).json({
                data: {},
                status: 1,
                message: vallitareError.message,
            });
        }

        const newEvaluation = await evaluationManager.createEvaluation(data);
        return res.status(200).json({
            data: newEvaluation,
            status: 0,
            message: 'Evaluación creada correctamente',
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


const getEvaluations = async (req, res) => {
    const queryParams = req.query;
    let query = {};

    if (queryParams._id) {
        query._id = new ObjectId(queryParams._id);
    } else if (queryParams.studentid) {
        query.studentid = new ObjectId(queryParams.studentid);
    }

    try {
        const evaluations = await evaluationManager.getAllEvaluations(query );
        if (!evaluations || evaluations.length === 0) {
            throw new Error('No hay evaluaciones para mostrar.');
        }
        return res.status(200).json({
            data: evaluations,
            status: 0,
            message: 'Se han encontrado las siguientes evaluaciones',
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


const updateEvaluation = async (req, res) => {
    try {
        const filter = req.params;
        const  dataUpdate  = req.body;
        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        const updatedEvaluation = await evaluationManager.updateEvaluation(query, dataUpdate);
        return res.status(200).json({
            data: updatedEvaluation,
            status: 0,
            message: 'Evaluación actualizada correctamente',
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


const deleteEvaluation = async (req, res) => {
    try {
        const filter = req.params;
        let query;
        if (filter._id) {
            query = { _id: new ObjectId(filter._id) };
        } else {
            query = filter;
        }
        const deletedEvaluation = await evaluationManager.deleteEvaluation(query);
        return res.status(200).json({
            data: deletedEvaluation,
            status: 0,
            message: 'Evaluación eliminada correctamente',
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
    createEvaluation,
    getEvaluations,
    updateEvaluation,
    deleteEvaluation
}

